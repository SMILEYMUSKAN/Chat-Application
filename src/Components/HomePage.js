import { useHistory } from "react-router-dom";
import { useUserContext } from "../Contexts/UserProvider";
import { Redirect } from "react-router-dom";


var HomePage = () => {
  var history = useHistory();
  var { user } = useUserContext();
  
  var OnClickLoginHandler = () => {
    history.push("/login");
  };

  var OnClickSignUpHandler = () => {
    history.push("/signup");
  };

 
  if(user) return <Redirect to="/room"/>
  return (
    <div>
      <h1 className="HomePageUI">Chit && Chat</h1>
      <section className="ButtonSectionUI">
        <button
          className="bg-fuchsia-500 text-white text-lg p-1 m-2 w-24 rounded hover:bg-fuchsia-600 shadow transition"
          onClick={OnClickLoginHandler}
        >
          Login
        </button>
        <button
          className="bg-fuchsia-500 text-white text-lg p-1  w-24 rounded hover:bg-fuchsia-600 shadow transition"
          onClick={OnClickSignUpHandler}
        >
          SignUp
        </button>
      </section>
      <p className="text-fuchsia-500 text-md mt-4 text-center">
        Do Login or signUp to start conversation
      </p>
      <footer>
        <p className="text-fuchsia-500 text-md text-center mt-48">
          &copy;2023 Smiley Muskan.All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
