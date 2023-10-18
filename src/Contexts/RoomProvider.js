import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

var RoomContext = createContext({});

var RoomProvider = ({ children }) => {
  var [room, setRoom] = useState("");
  var [name, setName] = useState("");
  var [toggle, setToggle] = useState(false);

  var history = useHistory();

  var HandleOnSubmit = (event) => {
    event.preventDefault();
    setToggle(true);
    history.push("/chats");
  };

  var HandleOnChange = (event) => {
    var {
      target: { value },
    } = event;
    setRoom(value);
  };

  var HandleOnChangeName = (event) => {
    var {
      target: { value },
    } = event;
    setName(value);
  };

  var HandleLogOut = () => {
    setName("");
    return <Redirect to="/room" />;
  };

  return (
    <RoomContext.Provider
      value={{
        HandleOnSubmit,
        HandleOnChange,
        HandleOnChangeName,
        HandleLogOut,
        name,
        room,
        setRoom,
        setName,
        toggle,
        setToggle,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export var UseRoomContext = () => useContext(RoomContext);
export default RoomProvider;
