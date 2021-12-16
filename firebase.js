import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBo3MiGAFCqX1lpfrV7SWYnly6eEqxWdKU",
    authDomain: "chat-cmx.firebaseapp.com",
    databaseURL: "https://chat-cmx-default-rtdb.firebaseio.com",
    projectId: "chat-cmx",
    storageBucket: "chat-cmx.appspot.com",
    messagingSenderId: "740965182545",
    appId: "1:740965182545:web:4320afc20f16572e009c70",
    measurementId: "G-MMZTT5Q3N8"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db,auth }