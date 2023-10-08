import { useEffect, useState } from "react";
import { useUserContext } from "../Contexts/UserProvider";
import { Redirect } from "react-router-dom";

var Authentication = ({ isLogin }) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  var { clearErrors, user, error, doLogin, doSignUp } = useUserContext();

  var HandleSubmit = (event) => {
    event.preventDefault();
    (isLogin ? doLogin : doSignUp)(email, password);
  };

  if (user) return <Redirect to="/chats" />;

  useEffect(() => {
    clearErrors();
  }, [isLogin]);

  var title = isLogin ? <h1>Login</h1> : <h1>SignUp</h1>;
  return (
    <div>
      <h1>{title}</h1>
      {error && <div>{error}</div>}
      <form onSubmit={HandleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter Your Email"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Your Password"
        />
        <button>{title}</button>
      </form>
    </div>
  );
};
export default Authentication;
