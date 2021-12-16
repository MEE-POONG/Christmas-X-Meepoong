import React from 'react'
import firebase from '../firebase'

function Todo({todo}) {
    return (
        <div>
            <h1>{todo.title}</h1>
        </div>
    )
}

export default Todo
