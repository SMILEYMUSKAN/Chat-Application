import { createContext, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../FireBaseApp";



var UserContext = createContext({
  user: null,
  error: null,
});

var App_User = "APP_USER";


const FIREBASE_AUTH_ERRORS = {
  "auth/wrong-password": `Invalid email/password`,
  "auth/user-not-found": `No user found for provided email`,
  "auth/email-already-in-use": "Email already register, do please login",
  "auth/invalid-email": "Please Provide Valid Email",
  "auth/invalid-login-credentials" : "Invalid Login Attempt",
  "auth/missing-password" : "Please Provide Your Password"
};



var UserProvider = ({ children }) => {
  var localUser = localStorage.getItem(App_User);
  var [user, setUser] = useState(localUser ? JSON.parse(localUser) : null);
  var [error, setError] = useState(null);

  var SaveUser = (res) => {
    localStorage.setItem(App_User, JSON.stringify(res));
    setUser(res);
  };


  var doLogin =  (email, password) => {
    clearErrors();
     signInWithEmailAndPassword(auth, email, password)
     .then((userInfo) => {
      SaveUser(userInfo.user);
    })
      .catch((errorInfo) => {
        var message = FIREBASE_AUTH_ERRORS[errorInfo.code];
        setError(message);
      });
  };

  var doSignUp =  (email, password) => {
    clearErrors();
     createUserWithEmailAndPassword(auth, email, password)
    .then((userInfo) => {
      SaveUser(userInfo.user);
    })
      .catch((error) => {
        var message = FIREBASE_AUTH_ERRORS[error.code];
        setError(message);
      });
  };
      
  var clearErrors = () => {
    setError(null);
  };

  var LogOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        clearErrors,
        LogOut,
        user,
        error,
        doLogin,
        doSignUp,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export var UseUserContext = () => useContext(UserContext);
export default UserProvider;
