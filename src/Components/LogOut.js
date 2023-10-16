import { useEffect } from "react";
import { useUserContext } from "../Contexts/UserProvider";
import { useHistory } from "react-router-dom";

var LogOut = () => {
  var history = useHistory();
  var { LogOut } = useUserContext();

  useEffect(() => {
    LogOut();
    localStorage.clear();
    history.push("/");
  }, []);

  return null;
};

export default LogOut;
