// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXDBYIaEwMu7WxufE3gfvKSFW8D4Z_oLM",
  authDomain: "chitchat-d3a54.firebaseapp.com",
  projectId: "chitchat-d3a54",
  storageBucket: "chitchat-d3a54.appspot.com",
  messagingSenderId: "538861477757",
  appId: "1:538861477757:web:35cd47a1944b24bc91b614"
};


// Initialize Firebase
const FireBaseApp = initializeApp(firebaseConfig);
export var auth = getAuth(FireBaseApp);

// Initialize Cloud Firestore and get a reference to the service
export const database = getFirestore(FireBaseApp);
