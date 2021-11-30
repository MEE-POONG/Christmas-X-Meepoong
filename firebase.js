import firebase from "firebase";

const config = {
    apiKey: "AIzaSyC6ETyCQPBXLeOuv-0uou3pWOexoR7pcPM",
    authDomain: "christmas-meepong.firebaseapp.com",
    projectId: "christmas-meepong",
    storageBucket: "christmas-meepong.appspot.com",
    messagingSenderId: "251522156680",
    appId: "1:251522156680:web:ffec31ec40f48d8413773d",
    measurementId: "G-STK603FJ47",
    databaseURL : "https://christmas-meepong-default-rtdb.firebaseio.com/"
};


export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();