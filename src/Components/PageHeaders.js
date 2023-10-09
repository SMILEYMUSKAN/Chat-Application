import PageLinks from "./PageLinks";
import { useUserContext } from "../Contexts/UserProvider";

var PageHeaders = () => {
  var { user } = useUserContext();
  return (
    <div className="bg-fuchsia-800 p-1">
      <header className="flex justify-between  w-full">
        <PageLinks to="/">
          <p className="m-2 text-fuchsia-300 italic text-2xl transition hover:text-white ">Chit-Chat</p>
          </PageLinks>
        <nav className="flex gap-4 text-fuchsia-300 italic flex-wrap m-2 hover:pointer">
          {user ? (
            <>
              <p>{user.email}</p>
              <PageLinks to="/chats" className="transition hover:text-white" >Chat Rooms</PageLinks>
              <PageLinks to="/logout" className="transition hover:text-white">LogOut</PageLinks>
            </>
          ) : (
            <>
              <PageLinks to="/login" className="transition hover:text-white">Login</PageLinks>
              <PageLinks to="/signup" className="transition hover:text-white">SignUp</PageLinks>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};
export default PageHeaders;
