import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "Insert The Firebase Web API Key Here",
    authDomain: "clone-3fcff.firebaseapp.com",
    projectId: "clone-3fcff",
    storageBucket: "clone-3fcff.appspot.com",
    messagingSenderId: "424294872932",
    appId: "1:424294872932:web:29666f5f59f120d4faac71",
    measurementId: "G-YPMJYNK8C1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };