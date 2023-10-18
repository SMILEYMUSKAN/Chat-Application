import PageLinks from "./PageLinks";
import { useUserContext } from "../Contexts/UserProvider";
import { useRoomContext } from "../Contexts/RoomProvider";

var PageHeaders = () => {
  var { user } = useUserContext();
  var { toggle } = useRoomContext();

  return (
    <div className="MainDivPageHeaders">
      <header className="MainHeaderPageHeader">
        <PageLinks to="/">
          <p className="PageHomeLinkUI">Chit-Chat</p>
        </PageLinks>

        <nav className="NavPageHeaderUI">
          {user ? (
            <>
              <p className="email">{user.email}</p>

              {toggle ? (
                <PageLinks to="/chats" className="chat">
                  Chats
                </PageLinks>
              ) : (
                <PageLinks to="/room" className="room" id="room">
                  Room
                </PageLinks>
              )}
              <p className="logout">
                <PageLinks to="/logout">LogOut</PageLinks>
              </p>
            </>
          ) : (
            <>
              <PageLinks to="/login" className="login">
                Login
              </PageLinks>
              <PageLinks to="/signup" className="signup">
                SignUp
              </PageLinks>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};
export default PageHeaders;
