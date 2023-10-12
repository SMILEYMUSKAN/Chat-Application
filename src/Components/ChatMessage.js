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
    where("roomName", "==", room),
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
    <section className="SectionUI">
      <ChatRoom />
      <div className="ChatMessagesUI">
        <form onSubmit={HandleSubmit}>
          <div>
            {firestoreMessages.map((info, idx) => (
              <h1 key={idx}>{info.messages}</h1>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type Your Message Here..."
            onChange={HandleOnChange}
            value={newMessage}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ChatMessage;
