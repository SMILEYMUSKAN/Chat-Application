import { useEffect, useState } from "react";
import { database } from "../FirebaseApp";
import {
  addDoc,
  collection,
  orderBy,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useUserContext } from "../Contexts/UserProvider";
import { useChatRoomContext } from "../Contexts/ChatRoomProvider";
import "../App.css";
import ChatRoom from "./ChatRoom";

var ChatMessage = () => {
  var [newMessage, setNewMessage] = useState("");
  var [firestoreMessages, setFirestoreMessages] = useState([]);

  var { user } = useUserContext();
  var { room } = useChatRoomContext();

  var MessagesCollection = collection(database, "ChatApp");
  var MessagesQuery = query(
    MessagesCollection,
    where("userEmail", "==", user.email),
    orderBy("createdAt", "asc")
  );

  useEffect(() => {
    onSnapshot(MessagesQuery, (snap) => {
      var messagesInDB = [];
      snap.forEach((doc) => {
        var messagesData = { ...doc.data(), id: doc.id };
        messagesInDB.push(messagesData);
      });
      setFirestoreMessages(messagesInDB);
    });
  }, []);

  /*

*/
  var HandleSubmit = (event) => {
    event.preventDefault();
    console.log(newMessage);

    var CollectionData = {
      messages: newMessage,
      createdAt: new Date().toLocaleString(),
      userEmail: user.email,
      roomName: room,
    };

    addDoc(MessagesCollection, CollectionData).then(() => {
      setNewMessage("");
    });
  };

  var HandleOnChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <section className="ParentUI">
      <ChatRoom />
      <div id="ChatMessageUI">
        <form onSubmit={HandleSubmit} id="ChatMessageFormUI">
  
          <div className="ChatMessageMessagesUI">
            {firestoreMessages.map((info, idx) => (
              <div key={idx}>
                 <p>{info.userEmail}</p>
                 <p>{info.createdAt}</p>
                <h1>{info.messages}</h1>
               
              </div>
            ))}
          </div>
          <section className="FormSectionChatMessagesUI">
          <input
            type="text"
            placeholder="Type Your Message Here..."
            onChange={HandleOnChange}
            value={newMessage}
            className="ChatMessageInputUI"
          />
          <button type="submit" className="ChatMessageButtonUI">Send</button>
         
          </section>
        </form>
      </div>
    </section>
  );
};

export default ChatMessage;
