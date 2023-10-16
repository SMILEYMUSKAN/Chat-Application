import PageLinks from "./PageLinks";
import { useUserContext } from "../Contexts/UserProvider";
import { useRoomContext } from "../Contexts/RoomProvider";


var PageHeaders = () => {
  var { user } = useUserContext();
  var {  toggle } = useRoomContext();

  return (
    <div className="MainDivPageHeaders">
      <header className="MainHeaderPageHeader">
        <PageLinks to="/">
          <p className="PageHomeLinkUI">Chit-Chat</p>
          </PageLinks> 
     
        <nav className="NavPageHeaderUI">
  
          {user ? (
            <>
              <p>{user.email}</p>

             {toggle ? <PageLinks to="/chats" >Chats</PageLinks> :   <PageLinks to="/room" >Room</PageLinks>}
              <PageLinks to="/logout">LogOut</PageLinks>
              

            </>
          ) : (
            <>
              <PageLinks to="/login" >Login</PageLinks>
              <PageLinks to="/signup">SignUp</PageLinks>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};
export default PageHeaders;
