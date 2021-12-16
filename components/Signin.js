import React,{useState,useEffect} from 'react'
import firebase from 'firebase'
import { db,auth } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth";





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
        
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google </button>
        </div>
    )
}

function SignOut() {
    return (
      auth.currentUser && (
        <div>
          <button onClick={() => auth.signOut()}>Sign Out </button>
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
            <SignOut/>
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
