import React from 'react'
import firebase from 'firebase'
import {auth} from '../firebase'
// import { useAuthState } from "react-firebase-hooks/auth";




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
        
        <div>
            <button onClick={signInWithGoogle}>Sign In With Google </button>
        </div>
    )
}

function Chat() {
    
}

export default Signin
