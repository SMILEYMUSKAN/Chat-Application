import { Route, Switch } from "react-router-dom";
import Authentication from "./Components/Authentication";
import HomePage from "./Components/HomePage";
import LogOut from "./Components/LogOut";
import ChatMessages from "./Components/ChatMessages";
import ChatRoom from "./Components/ChatRoom";

var AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/login"
          render={(routerProps) => <Authentication isLogin {...routerProps} />}
        />
        <Route
          path="/signup"
          render={(routerProps) => <Authentication {...routerProps} />}
        />
        <Route path="/logout" component={LogOut} />
        <Route path="/chats" component={ChatMessages} />
        <Route path="/room" component={ChatRoom} />
      </Switch>
    </div>
  );
};

export default AppRouter;
