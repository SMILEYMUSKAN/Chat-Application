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
    console.log(user);
  };

  if (user) return <Redirect to="/chatRoom" />;

  useEffect(() => {
    clearErrors();
  }, [isLogin]);


  var title = isLogin ? <h1>Login</h1> : <h1>SignUp</h1>;
  return (
    <div  className="w-5/12 h-96 mt-8 flex flex-col items-center justify-start mx-auto rounded">
  
      <form onSubmit={HandleSubmit} className="flex flex-col gap-5">
      <h1 className="text-3xl mb-4 text-fuchsia-500 mt-6">{title}</h1>
        {error && <div className="text-red-500">{error}</div>}
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email Address"
          className="shadow pb-4 pl-4 pt-2 w-96 border-fuchsia-500  bg-white text-slate-900 border-b-2 border-fuchsia-500 focus:outline-none"
          
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder= "Password"
          className="pb-4 pl-4 pt-2 w-96 bg-white text-slate-900 border-fuchsia-500 border-b-2 shadow focus:outline-none"
        />
        <button type="submit" className="bg-fuchsia-500 text-center rounded w-96 p-2 mt-10 mb-4 text-white transition hover:bg-fuchsia-700 shadow">Continue</button>

      </form>

  
    </div>
  );
};


export default Authentication;
