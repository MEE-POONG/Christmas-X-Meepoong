import React from 'react'
import { useRecoilState } from 'recoil';
import firebase from '../firebase';
// import {addindState} from '../context/Menu';
import {nameMenuState} from '../context/NameMenu'
// import {Step} from '../context/Step'


const database = firebase.database();

export  default function Forms() {
    const [nameMenu, SetNamemenu] = useRecoilState(nameMenuState);
    // const [nameMenu  , SetNameMenu ] = useRecoilState (nameMenuState);
    // const [step , SetStep] = useRecoilState (stepState);
    const dataRef = database.ref("/mee");
    return (
        <div>
            <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
      value={nameMenu.name}
      onChange={(e) =>
      SetNamemenu({...nameMenu, name: e.target.value})
    }
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
       onClick={async (e) => {
           const data = {nameMenu};
           console.log(data);
           await dataRef.push(data);
          
       }}
     
      >
        Sign In
      </button>
  
    </div>

  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
        </div>
    )
}


