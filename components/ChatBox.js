import React from 'react'
import Image from 'next/image'
import Form  from "../components/Form";
import {GrChatOption} from 'react-icons/gr'


function openForm(){
    document.getElementById('myForm').style.display = "block"
}

function ChatBox() {


    return (
        <div>


<button className="open-button chatgg  text-4xl  z-40" onClick={openForm}><GrChatOption /></button>

<div className="chat-popup sm:w-full md:w-1/2 lg:w-1/2" id="myForm">
  <div className="form-container  rounded-l-3xl rounded-t-3xl  z-40">
<Form/>
   

 
  
  </div>
</div></div>
    )
}


export default ChatBox
