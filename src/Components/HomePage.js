import { useHistory } from "react-router-dom";
import { UseUserContext } from "../Contexts/UserProvider";
import { Redirect } from "react-router-dom";


var HomePage = () => {
  var history = useHistory();
  var { user } = UseUserContext();
  
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
          className="ButtonOne"
          onClick={OnClickLoginHandler}
        >
          Login
        </button>
        <button
          className="ButtonTwo"
          onClick={OnClickSignUpHandler}
        >
          SignUp
        </button>
      </section>
      <p className="ParaUIHomePage">
        Do Login or signUp to start conversation
      </p>
      <footer>
        <p className="FooterUIHomePage">
          &copy;2023 Smiley Muskan.All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
