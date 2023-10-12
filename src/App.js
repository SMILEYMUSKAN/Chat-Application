import "./App.css";
import AppRouter from "./AppRouters";
import PageHeaders from "./Components/PageHeaders";
import UserProvider from "./Contexts/UserProvider";
import ChatRoomsProvider from "./Contexts/ChatRoomProvider";

function App() {
  return (
    <main className="AppMainUI">
    <UserProvider>
      <ChatRoomsProvider>
      <PageHeaders />
      <AppRouter />
      </ChatRoomsProvider>
    </UserProvider>
    </main>
  );
}

export default App;
