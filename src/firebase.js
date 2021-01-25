import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFRHImX3YuJGji6qhGJo70TAau3xz9sOw",
    authDomain: "clone-283da.firebaseapp.com",
    projectId: "clone-283da",
    storageBucket: "clone-283da.appspot.com",
    messagingSenderId: "427925688103",
    appId: "1:427925688103:web:695aea3be7ee893378a302",
    measurementId: "G-34JW88KDXJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,  auth };