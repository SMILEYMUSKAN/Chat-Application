import { useEffect, useState } from "react";
import { UseUserContext } from "../Contexts/UserProvider";
import { Redirect } from "react-router-dom";




var Authentication = ({ isLogin }) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
 

  var { clearErrors, user, error, doLogin, doSignUp } = UseUserContext();

  var HandleSubmit = (event) => {
    event.preventDefault();
    (isLogin ? doLogin : doSignUp)(email, password);
     
  };


  useEffect(() => {
    clearErrors();
    setEmail("");
    setPassword("");
  }, [isLogin]);


  var title = isLogin ? <h1>Login</h1> : <h1>SignUp</h1>;
  if (user) return <Redirect to="/room" />;
  return (
    <div  className="AuthenticationMainDiv">
  
      <form onSubmit={HandleSubmit} className="AuthFormUI">
      <h1 className="AuthHeaderUI">{title}</h1>
        {error && <div className="AuthErrUI">{error}</div>}
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email Address"
          className="AuthNameInputUI"
          
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder= "Password"
          className="AuthNameInputUI"
        />
        <button type="submit" className="AuthSubmitButtonUI">Continue</button>

      </form>

  
    </div>
  );
};


export default Authentication;
