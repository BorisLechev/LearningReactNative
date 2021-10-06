import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVUZhu7dCsdAGR3bICavS-QWqp4tFR7Ww",
  authDomain: "signal-clone-6f754.firebaseapp.com",
  projectId: "signal-clone-6f754",
  storageBucket: "signal-clone-6f754.appspot.com",
  messagingSenderId: "1019470652101",
  appId: "1:1019470652101:web:6d9c9ce205e48b67a406ac"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
