import { useEffect, useState } from "react";
import { UseRoomContext } from "../Contexts/RoomProvider";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { database } from "../FireBaseApp";
import { UseUserContext } from "../Contexts/UserProvider";
import { Redirect } from "react-router-dom";

var ChatMessages = () => {
  var [Messages, setMessages] = useState("");
  var [chat, setChat] = useState([]);
  var { room, name, setToggle, HandleLogOut } = UseRoomContext();
  var { user } = UseUserContext();
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
      .then(() => {
        setMessages("");
      })
      .catch((error) => console.log(":: Error ::", error));
  };

  useEffect(() => {
    setChat([]);
    setToggle(false);
  }, [user.email]);

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
  
  if(name == "") return <Redirect to="/room"/>
  if (room == "") return <Redirect to="/room" />;
  
  return ( 
    <div className="ChatMessagesUI">
      <form onSubmit={HandleSubmitEvent} className="FromUI" >
        <div className="ChatMessageFormDiv" >
        <h1 className="RoomNameUI">{room}</h1>
        <button onClick={HandleLogOut} className="ChatMessageLogOutUI">Exit Chat</button>
        </div>
        <span className="ChatSpanUI" id="inner">
          <div>
            {chat.map((Docdata, idx) => (
              <div key={idx} className="EachCategoery">
                <p
                  className={
                    user.email == Docdata.email ? "AnotherUsers" : "userNameUI"
                  }
                >
                 {Docdata.userName}
                </p>
                <div className="MessagesUI">
                  <div
                    className={
                      user.email == Docdata.email
                        ? "MessagesSpanUIUser"
                        : "MessagesSpanUI"
                    }
                  >
                    <h1 className="ChatMessagesUICon">{Docdata.chats}</h1>
                  </div>
                  <p
                    className={
                      user.email == Docdata.email
                        ? "CreatedAtUser"
                        : "CreatedAt"
                    }
                  >
                    {Docdata.createdAt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </span>
        <section className="FormItemsUI">
          <input
            className="InputUI"
            type="text"
            onChange={HandleChangeEvent}
            placeholder="Type a message"
            value={Messages}
          />
          {Messages ? (
            <button className="ButtonUI" type="submit">
              Send
            </button>
          ) : (
            <button className="ButtonUI" type="submit" disabled={true}>
              Send
            </button>
          )}
        </section>
      </form>
    </div>
  );
};

export default ChatMessages;
