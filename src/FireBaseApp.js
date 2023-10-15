// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9CEjFcbzzBlupdAZRKhXLv-PbHLMhpIY",
  authDomain: "chit-chat-7c9a3.firebaseapp.com",
  projectId: "chit-chat-7c9a3",
  storageBucket: "chit-chat-7c9a3.appspot.com",
  messagingSenderId: "67357108447",
  appId: "1:67357108447:web:c6aa94c4788c425bb2616a"
};

// Initialize Firebase
const FireBaseApp = initializeApp(firebaseConfig);
export var auth = getAuth(FireBaseApp);

// Initialize Cloud Firestore and get a reference to the service
export const database = getFirestore(FireBaseApp);
