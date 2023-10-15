import { useEffect, useState } from "react";
import { useRoomContext } from "../Contexts/RoomProvider";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { database } from "../FireBaseApp";
import { useUserContext } from "../Contexts/UserProvider";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

var ChatMessages = () => {
  var [Messages, setMessages] = useState("");
  var [chat, setChat] = useState([]);
  var { room, name } = useRoomContext();
  var { user } = useUserContext();

  var ChatsCollection = collection(database, "ChatsInfo");

  var saveChats = {
    userId: user.uid,
    email: user.email,
    roomName: room,
    userName: name,
    chats: Messages,
    createdAt: new Date().toLocaleString(),
  };
  var HandleSubmitEvent = (event) => {
    event.preventDefault();
    addDoc(ChatsCollection, saveChats)
      .then((DOC) => {
        setMessages("");
      })
      .catch((error) => console.log(":: Error ::", error));
  };
  
  useEffect(() => {
    setChat([])
  }, [user.email])

  useEffect(() => {
    var DbQuery = query(
      ChatsCollection,
      where("roomName", "==", room),
      orderBy("createdAt", "asc")
    );
    getDocs(DbQuery)
      .then((Collection) => {
        var ChatInfoDb = [];
        Collection.forEach((doc) => {
          var ChatRoomData = doc.data();
          ChatInfoDb.push({ ...ChatRoomData, id: doc.id });
        });
        setChat(ChatInfoDb);
      })
      .catch((err) => console.log(err));
  }, [chat]);

  var HandleChangeEvent = (event) => {
    var {
      target: { value },
    } = event;
    setMessages(value);
  };

  if(room == "") return <Redirect to="/room"/>
  return (
    <div className="ChatMessagesUI">
      <form onSubmit={HandleSubmitEvent} className="FromUI">
        <h1 className="RoomNameUI">{room}</h1>
        <span className="ChatSpanUI">
          {chat.map((Docdata, idx) => (
            <div key={idx}>
              <p className="userNameUI">{Docdata.userName}</p>
              <div className="MessagesUI">
                <h1>{Docdata.chats}</h1>
                <p className="CreateddAt">{Docdata.createdAt}</p>
              </div>
            </div>
          ))}
        </span>
        <section className="FormItemsUI">
          <input
            className="InputUI"
            type="text"
            onChange={HandleChangeEvent}
            placeholder="Type a message"
            value={Messages}
          />
          {Messages ? <button className='ButtonUI' type="submit">
            Send
          </button> : <button className='ButtonUI' type="submit" disabled={true}>
            Send
          </button>}
          
          
        </section>
      </form>
    </div>
  );
};

export default ChatMessages;
