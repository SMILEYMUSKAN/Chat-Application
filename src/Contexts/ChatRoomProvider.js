import { addDoc, collection } from "firebase/firestore";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { db } from "../FireBaseApp";
import { useUserContext } from "./UserProvider";

var ChatRoomContext = createContext({
    room:"",
})

var ChatRoomProvider  = ({ children }) => {
    var [room, setRoom] = useState("");
    var [empty, setEmpty] = useState([]);
    var { user } = useUserContext();

    var HandleOnSubmitOfChatRoom = (event) => {
       event.preventDefault();
       var ChatRoomsData = {
        room,
        RoomCreatedAt : (new Date()).toLocaleString(),
        email: user.email,
        id : user.uid
       }
       addDoc(collection(db, "ChatRooms"), ChatRoomsData)
       .then( Doc => {
        console.log(Doc, ":: Success ::");
        setRoom("");
    })
       .catch((err) => {
        console.log(err)
       })
    }
   
    var HandleOnChangeofChatRoom = (event) => {
       var { target : { value }} = event;
       setRoom(value);
       var inputValue = [];
       var Value = inputValue.push(...value, value)
       setEmpty(Value)
  }
    

    return <ChatRoomContext.Provider value={{
        HandleOnSubmitOfChatRoom,
        HandleOnChangeofChatRoom,
        room,
        empty,
        setRoom,
    
    }}>
           { children }
    </ChatRoomContext.Provider>

};

export var useChatRoomContext = () => useContext(ChatRoomContext);
export default ChatRoomProvider;