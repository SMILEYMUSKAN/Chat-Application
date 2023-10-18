// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPKKiqB_IgS6Ev7uT54UhUDudlZ3-vGP4",
  authDomain: "chit-chat-dbf4b.firebaseapp.com",
  projectId: "chit-chat-dbf4b",
  storageBucket: "chit-chat-dbf4b.appspot.com",
  messagingSenderId: "169903426526",
  appId: "1:169903426526:web:839ceeb21b18380f8feb4f"
};



// Initialize Firebase
const FireBaseApp = initializeApp(firebaseConfig);
export var auth = getAuth(FireBaseApp);

// Initialize Cloud Firestore and get a reference to the service
export const database = getFirestore(FireBaseApp);
