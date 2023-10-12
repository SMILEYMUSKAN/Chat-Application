import { Route, Switch } from "react-router-dom";
import Authentication from "./Components/Authentication";
import HomePage from "./Components/Home";
import LogOut from "./Components/LogOut";
import ChatMessage from "./Components/ChatMessage";

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
        <Route path="/chats" component={ ChatMessage }/>
      </Switch>
    </div>
  );
};

export default AppRouter;
