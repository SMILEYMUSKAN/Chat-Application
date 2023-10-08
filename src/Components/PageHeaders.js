import PageLinks from "./PageLinks";
import { useUserContext } from "../Contexts/UserProvider";

var PageHeaders = () => {
  var { user } = useUserContext();
  return (
    <div>
      <header>
        <PageLinks to="/">Chit-Chat</PageLinks>
        <nav>
          {user ? (
            <>
              <p>{user.email}</p>
              <PageLinks to="/chats">Chat Rooms</PageLinks>
              <PageLinks to="/logout">LogOut</PageLinks>
            </>
          ) : (
            <>
              <PageLinks to="/login">Login</PageLinks>
              <PageLinks to="/signup">SignUp</PageLinks>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};
export default PageHeaders;
