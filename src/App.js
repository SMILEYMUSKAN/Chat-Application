import "./App.css";
import AppRouter from "./AppRouters";
import PageHeaders from "./Components/PageHeaders";
import UserProvider from "./Contexts/UserProvider";

function App() {
  return (
    <main className="w-full h-full">
    <UserProvider>
      <PageHeaders />
      <AppRouter />
    </UserProvider>
    </main>
  );
}

export default App;
