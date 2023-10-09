import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

import { FirebaseApp } from "../FirebaseApp";

var UserContext = createContext({
  user: null,
  error: null,
});

var App_User = "APP_USER";


const FIREBASE_AUTH_ERRORS = {
  "auth/wrong-password": `Invalid email/password`,
  "auth/user-not-found": `No user found for provided email`,
  "auth/email-already-in-use": "Email already register, do please login",
  "auth/invalid-email": "Please Provide Email/Password",
  "auth/invalid-login-credentials" : "Invalid Login Attempt"
};



var UserProvider = ({ children }) => {
  var localUser = localStorage.getItem(App_User);
  var [user, setUser] = useState(localUser ? JSON.parse(localUser) : null);
  var [error, setError] = useState(null);
  var history = useHistory();
  var auth = getAuth(FirebaseApp);

  var SaveUser = (res) => {
    localStorage.setItem(App_User, JSON.stringify(res));
    setUser(res);
    history.push("/chats");
  };

  var doLogin = (email, password) => {
    clearErrors();
    signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        SaveUser(userInfo.user);
        console.log(":: Login SUCCESS ::", userInfo);
      })
      .catch((errorInfo) => {
        var message = FIREBASE_AUTH_ERRORS[errorInfo.code];
        setError(message);
        console.log(":: ERROR INFO :: -> ", errorInfo);
      });
  };

  var doSignUp = (email, password) => {
    clearErrors();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        SaveUser(userInfo.user);
        console.log(":: SIGNUP SUCCESSFULL ::", userInfo, userInfo.user);
      })
      .catch((error) => {
        var message = FIREBASE_AUTH_ERRORS[error.code];
        setError(message);
        console.log(":: ERROR IN SIGNUP ::", message);
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

export var useUserContext = () => useContext(UserContext);
export default UserProvider;
