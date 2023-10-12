import { useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";


var chatRoomContext = createContext({
  room: null,
});

var ChatRoomsProvider = ({ children }) => {
  var [room, setRoom] = useState(null);
  var history = useHistory();

  var HandleOnChangeEvent = (event) => {
    setRoom(event.target.value);
  };

  var HandleOnClickEvent = () => {
    room ? history.push("/chats") : null;
  };

  return (
    <chatRoomContext.Provider
      value={{
        room,
        HandleOnChangeEvent,
        HandleOnClickEvent,
        setRoom,
      }}
    >
      {children}
    </chatRoomContext.Provider>
  );
};

export var useChatRoomContext = () => useContext(chatRoomContext);
export default ChatRoomsProvider;
