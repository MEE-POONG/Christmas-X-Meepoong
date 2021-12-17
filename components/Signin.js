import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import {GoSignOut} from "react-icons/go"


function App() {
  const [user] = useAuthState(auth);
  return <>{user ? <Chat /> : <Signin />}</>;
}

function Signin() {
  function signInWithGoogle() {
    const sign = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(sign);
  }
  return (

    <>
  
    <div data-aos="fade-up"
data-aos-duration="20000" 
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" className="bg-gray-100 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-2 ">
      <div className="max-w-md w-full space-y-8 ">
        <div>
        <Image data-aos="fade-up"
data-aos-duration="20000" 
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" className="border-b-4 border-red-900" src="/assets/CHATBOX-01.png" width={800} height={800} />
          <h2 data-aos="fade-up"
data-aos-duration="20000" 
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"  className="mt-6 text-center text-3xl font-extrabold text-gray-900">MeepoongChat</h2>
          <div 
          data-aos="fade-up"
          data-aos-duration="20000" 
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false" 
          className="mt-2 text-center text-l text-gray-600">
           เข้าร่วมสนทนากับพวกเรา และร่วมนับถอยหลังสู่ปีใหม่ไปด้วยกัน
           
          </div>
        </div>
        <div className="mt-8 space-y-6" >
          <div>
            <button
            data-aos="fade-up"
            data-aos-duration="20000" 
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false" 
              type="submit"
              onClick={signInWithGoogle}
              className=" cursor-pointer border-b-4 border-red-900 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600  "
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
               
              </span>
              <FcGoogle className="text-xl" /> Sign in With Google
            </button>
          </div>
        </div>
      </div>
      <Image
      data-aos="fade-up"
      data-aos-duration="20000" 
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
            className="max-w-full rounded-lg shadow-lg"
            src="/assets/chat-01.png"
            width={750}
            height={500}
          />
    </div>
  </>

    
  );
}

function SignOut() {
  return (
    auth.currentUser && (


        
            <button className="px-4 text-5xl " onClick={() => auth.signOut()}>
              <GoSignOut/>
            </button>
      
    
    )
  );
}

function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    
        
      <>
      <div data-aos="zoom-in"
data-aos-duration="20000" 
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"  className=" w-full sm:p-6 justify-between flex flex-col h-screen">
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
          <div className="flex items-center space-x-4">
           
            <div className="flex flex-col leading-tight">
              <div className="text-2xl mt-1 flex items-center">
              <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-20 w-20 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
            <SignOut />
            </button>
                <span className="text-gray-700 mr-3">Meepoong Chats </span>
                <span className="text-green-500">
                  <svg width="10" height="10">
                    <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                  </svg>
                </span>
              </div>

            </div>
          </div>
          <div className="flex items-center space-x-2">

          
          </div>
        </div>
        <div
         id="messages"
        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          <div className="chat-message">
    
      
      

<div className="msgs">
    {messages.map(({ id, text, photoURL, uid }) => (
        <div >
            <div  key={id} className={`msg  ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                <img src={photoURL} alt="" />
                <p>{text}</p>
            </div>
        </div>
    ))}
</div>
       
            
             </div>
           
          </div>

      </div>
   

<div>

<SendMessage scroll={scroll} />
<div ref={scroll}></div>
</div>
 </>
  );
}

function SendMessage() {
  const [msg, setMsg] = useState("");
  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
  }
  return (


<div>
<form onSubmit={sendMessage}>
    <div className="sendMsg">
    <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0 ">
    <div className="relative flex ">
    <input
        type="text"
        placeholder="Write Something"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
         className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3"
     />
      <div className="absolute right-0 items-center inset-y-0  sm:flex ">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6 transform rotate-90"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
    </div>
</form>
</div>
  
  );
}

export default App;
