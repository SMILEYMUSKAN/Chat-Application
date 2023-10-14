import "./App.css";
import AppRouter from "./AppRouters";
import PageHeaders from "./Components/PageHeaders";
import UserProvider from "./Contexts/UserProvider";
import ChatRoomProvider from "./Contexts/ChatRoomProvider"
import ChatMessagesProvider from "./Contexts/ChatMessagesProvider";

function App() {
  return (
    <main className="AppMainUI">
    <UserProvider>
      <ChatRoomProvider>
        <ChatMessagesProvider>
      <PageHeaders />
      <AppRouter />
      </ChatMessagesProvider>
      </ChatRoomProvider>
    </UserProvider>
    </main>
  );
}

export default App;
