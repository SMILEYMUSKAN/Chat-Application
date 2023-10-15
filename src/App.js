import "./App.css";
import AppRouter from "./AppRouters";
import PageHeaders from "./Components/PageHeaders";
import UserProvider from "./Contexts/UserProvider";
import RoomProvider from "./Contexts/RoomProvider";

function App() {
  return (
    <main className="AppMainUI">
      <UserProvider>
        <RoomProvider>
          <PageHeaders />
          <AppRouter />
        </RoomProvider>
      </UserProvider>
    </main>
  );
}

export default App;
