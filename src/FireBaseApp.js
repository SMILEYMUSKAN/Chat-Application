// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD5EiRgMNXXr9kq6XW1I2vij4eDuQ9jJE",
  authDomain: "chatapplication-23402.firebaseapp.com",
  projectId: "chatapplication-23402",
  storageBucket: "chatapplication-23402.appspot.com",
  messagingSenderId: "55695046381",
  appId: "1:55695046381:web:4982f608d7f99013d7fee4"
};

// Initialize Firebase
const FireBaseApp = initializeApp(firebaseConfig);
export var auth = getAuth(FireBaseApp);

// Initialize Cloud Firestore and get a reference to the service
export const database = getFirestore(FireBaseApp);
