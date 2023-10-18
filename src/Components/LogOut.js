import { useEffect } from "react";
import { UseUserContext } from "../Contexts/UserProvider";
import { useHistory } from "react-router-dom";

var LogOut = () => {
  var history = useHistory();
  var { LogOut } = UseUserContext();

  useEffect(() => {
    LogOut();
    localStorage.clear();
    history.push("/");
  }, []);

  return null;
};

export default LogOut;
