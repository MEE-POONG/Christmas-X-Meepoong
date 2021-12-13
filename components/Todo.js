import React from 'react'
import firebase from '../utils/firebase'

function Todo({todo}) {

   const deleteTodo = () =>{
    const todoRef = firebase.database().ref('Todo').child(todo.id)
    todoRef.remove();
}
    
    return (
        <div className="flex flex-col px-2 chat-services  expand overflow-auto">
            <div className="chat bg-white text-gray-700 p-2 self-start my-2 rounded-md shadow mr-3">{todo.title}</div>
           <div className='grid grid-cols-2'>
              <button onClick={deleteTodo} className=' delete-btn text-red-600 text-xs'>Delete</button> 
           </div>   
        </div>
    )
}

export default Todo
