// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA2FjZV4d25uz5TRqwwy5e5vFGiW38w5M",
  authDomain: "test-2-df3ec.firebaseapp.com",
  projectId: "test-2-df3ec",
  storageBucket: "test-2-df3ec.appspot.com",
  messagingSenderId: "1092669944046",
  appId: "1:1092669944046:web:32740f9e5ce8c95197c3ff"
};



// Initialize Firebase
const FireBaseApp = initializeApp(firebaseConfig);
export var auth = getAuth(FireBaseApp);

// Initialize Cloud Firestore and get a reference to the service
export const database = getFirestore(FireBaseApp);
