import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbZRrHRSYY8X4QTw23Ob4igQBLLRBT8ig",
    authDomain: "uber-eats-clone-3a7ef.firebaseapp.com",
    projectId: "uber-eats-clone-3a7ef",
    storageBucket: "uber-eats-clone-3a7ef.appspot.com",
    messagingSenderId: "236357447804",
    appId: "1:236357447804:web:ca2c045b6101a13aa019f9"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;