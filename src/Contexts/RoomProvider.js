import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

var RoomContext = createContext({});

var RoomProvider = ({ children }) => {
  var [room, setRoom] = useState("");
  var [name, setName] = useState("");

  var history = useHistory();

  var HandleOnSubmit = (event) => {
    event.preventDefault();
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

  return (
    <RoomContext.Provider
      value={{
        HandleOnSubmit,
        HandleOnChange,
        HandleOnChangeName,
        name,
        room,
        setRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export var useRoomContext = () => useContext(RoomContext);
export default RoomProvider;
