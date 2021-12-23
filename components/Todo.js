import React from 'react'
import firebase from '../firebase'

function Todo({todo}) {
    return (
        
         
        <div className="chat-message">
         <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xL max-w-xs mx-2 order-2 items-start">
               <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600"> {todo.title} </span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-1"/>
         </div>
         <div className='mb-3'></div>
      </div>
 
            
     
    )
}

export default Todo
