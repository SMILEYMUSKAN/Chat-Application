import PageLinks from "./PageLinks";
import { useUserContext } from "../Contexts/UserProvider";
import { useRoomContext } from "../Contexts/RoomProvider";


var PageHeaders = () => {
  var { user } = useUserContext();
  var {  toggle } = useRoomContext();

  return (
    <div className="bg-fuchsia-800 p-1">
      <header className="flex justify-between  w-full">
        <PageLinks to="/">
          <p className="m-2 text-fuchsia-300 italic text-2xl ">Chit-Chat</p>
          </PageLinks> 
     
        <nav className="flex gap-4 text-fuchsia-300 italic flex-wrap m-2 hover:pointer">
  
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
