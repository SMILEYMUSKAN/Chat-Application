import "./App.css";
import AppRouter from "./AppRouters";
import PageHeaders from "./Components/PageHeaders";
import UserProvider from "./Contexts/UserProvider";

function App() {
  return (
    <UserProvider>
      <PageHeaders />
      <AppRouter />
    </UserProvider>
  );
}

export default App;
