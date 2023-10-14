import { addDoc, collection } from "firebase/firestore";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { db } from "../FireBaseApp";
import { useUserContext } from "./UserProvider";
import { useChatRoomContext } from "./ChatRoomProvider";

var ChatMessagesContext = createContext({});

var ChatMessagesProvider  = ({ children }) => {
    var [Message, setMessage] = useState("");

    var { user } = useUserContext();
    var { room, setRoom } = useChatRoomContext();

    var HandleOnSubmitoOfChatMessages = (event) => {
        event.preventDefault();
        var saveData = {
            userId: user.uid,
            email: user.email,
            roomName:room,
            chatMessage : Message,
            createdAt : (new Date()).toLocaleString(),
          };
      
      
          addDoc(collection(db, "chatsIfo"), saveData)
            .then((docRef) => {
              console.log(":: SAVE ORDER SUCCCESS", docRef)
              setRoom("");
              setMessage("");
            })
            .catch((error) => console.log(":: ERROR ::", error));
      
      
    };

    var HandleOnChangeOfChatMessages = (event) => {
        var { target : { value }} = event;
        setMessage(value);
    };

   
    return <ChatMessagesContext.Provider value={{
        HandleOnSubmitoOfChatMessages,
        HandleOnChangeOfChatMessages,
        Message,
        setMessage
    }}>
           { children }
    </ChatMessagesContext.Provider>

};

export var useChatMessagesContext = () => useContext(ChatMessagesContext);
export default ChatMessagesProvider;