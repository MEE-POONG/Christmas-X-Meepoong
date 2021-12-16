import React,{useState,useEffect} from 'react'
import firebase from 'firebase'
import { db,auth } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import Image from 'next/image';
import {FcGoogle} from 'react-icons/fc'




function App(){
    const [user] = useAuthState(auth)
    return (
        <>
        {user ? <Chat/> : <Signin/>}

        </>
    )
}

function Signin() {
    function signInWithGoogle(){
        const sign = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(sign)
    }
    return (
<div className="w-full h-screen p-4 flex justify-center bg-gray-100 mt-10 items-center">
    <main className="w-full md:w-5/6 xl:w-4/6 h-9/10 flex items-center bg-gray-100 rounded-lg font-mono">
        <div className="w-full sm:w-1/2 md:w-1/3 p-10 grid grid-cols-1 space-y-4">
        <Image src="/BG.jpg" width ={800} height = {800} />
            <span className=" text-center font-bold text-4xl">Meepoong Chat</span>
            <div className="space-y-2">
     
            <button className="bg-black text-2xl text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-indigo-900 duration-100 ease-in-out" onClick={signInWithGoogle}>
             <FcGoogle/> Sign In With Google </button>  
            </div>
        </div>
        <div className="hidden sm:inline sm:w-1/2 md:w-2/3 p-10 md:p-20">
        </div>
    </main>
</div>      
    ) 
}

function SignOut() {
    return (
      auth.currentUser && (
        <div>
          <button className="bg-black text-2xl text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-indigo-900 duration-100 ease-in-out" onClick={() => auth.signOut()}>Sign Out </button>
        </div>
      )
    );
  }

function Chat() {
    const [messages,setMessages] = useState([])
    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot =>{
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    },[])
    return (

        
        <div className='msgs'> 
        <div className="w-full h-screen p-4 flex justify-center bg-gray-100 mt-10 items-center">
    <main className="w-full md:w-5/6 xl:w-4/6 h-9/10 flex grid grid-cols-2 gap-2 items-center bg-gray-100 rounded-lg font-mono">
        <div className="w-full sm:w-1/2 md:w-1/3 p-10 grid grid-cols-1 space-y-4">
        <Image src="/BG.jpg" width ={800} height = {800} />
            <span className=" text-center font-bold text-4xl">Meepoong Chat</span>
            <div className="space-y-2">
            <SignOut/>
      
            </div>
        </div>
        <div className="hidden sm:inline sm:w-1/2 md:w-2/3 p-10 md:p-20">
       
            <div>
        {messages.map(({id,text,photoURL,uid})=> (
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
<img src={photoURL} />
<p>{text}</p>
</div>
        ))}
        </div>
        <SendMessage/>
        </div>
    </main>
</div> 
   </div>       
    
    )
}


function SendMessage() {
    const [msg,setMsg] =useState('')
    async function sendMessage(e){
        e.preventDefault()
        const {uid,photoURL} =auth.currentUser
        await db.collection('messages').add({
            text:msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')

    }
    return (
        <div>
            <form onSubmit={sendMessage}>
               <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder=''/>
                <button type="submit" >Send</button>
            
            </form>
        </div>
    )
}

export default App
