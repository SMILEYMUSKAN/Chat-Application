// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcwdE6nWRslgSB8DztjCCqBFpZPOsr4Z0",
  authDomain: "chat-application-2cf3c.firebaseapp.com",
  projectId: "chat-application-2cf3c",
  storageBucket: "chat-application-2cf3c.appspot.com",
  messagingSenderId: "466176890066",
  appId: "1:466176890066:web:756dc1b1e78eb1c240c90b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const database = getFirestore(FirebaseApp);
export const auth = getAuth(FirebaseApp);
;
/*
import { getFirestore } from "firebase/firestore";
const firebaseFirestore = getFirestore(firebaseApp);
*/


