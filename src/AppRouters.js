import { Route, Switch } from "react-router-dom";
import Authentication from "./Components/Authentication";
import HomePage from "./Components/Home";
import LogOut from "./Components/LogOut";


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
      </Switch>
    </div>
  );
};

export default AppRouter;
