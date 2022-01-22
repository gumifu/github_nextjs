import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAA0v86ZrLqQ_S9tj5UCXJrmQASQIy9N0I",
    authDomain: "react-chat-3430e.firebaseapp.com",
    projectId: "react-chat-3430e",
    storageBucket: "react-chat-3430e.appspot.com",
    messagingSenderId: "1025460113945",
    appId: "1:1025460113945:web:cb4308a369181564f21088"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };