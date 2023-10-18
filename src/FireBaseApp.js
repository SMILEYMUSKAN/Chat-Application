// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC37Z7l9h3mF89p9Cs6yc-VOQdezYIxTkU",
  authDomain: "test-6cafb.firebaseapp.com",
  projectId: "test-6cafb",
  storageBucket: "test-6cafb.appspot.com",
  messagingSenderId: "491744612660",
  appId: "1:491744612660:web:357dcfcfeea0438c65d561"
};



// Initialize Firebase
const FireBaseApp = initializeApp(firebaseConfig);
export var auth = getAuth(FireBaseApp);

// Initialize Cloud Firestore and get a reference to the service
export const database = getFirestore(FireBaseApp);
