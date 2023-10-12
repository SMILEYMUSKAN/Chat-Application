import { useChatRoomContext } from "../Contexts/ChatRoomProvider";
import "../App.css";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { database } from "../FirebaseApp";
import { useUserContext } from "../Contexts/UserProvider";
import { useEffect, useState } from "react";

var ChatRoom = () => {
  var [roomsNames, setRoomsNames] = useState([]);
  var { room, HandleOnChangeEvent, HandleOnClickEvent, setRoom } =
    useChatRoomContext();
  var { user } = useUserContext();
  var MessagesCollection = collection(database, "ChatAppRoom");

  var HandleOnSubmitEvent = (event) => {
    event.preventDefault();

    var CollectionData = {
      roomName: room,
      createdAt: new Date().toLocaleString(),
      userEmail: user.email,
    };

    addDoc(MessagesCollection, CollectionData).then(() => {
      setRoom("");
      console.log("SUCCESS");
    });
  };

  useEffect(() => {
    var ChatRoomCollections = collection(database, "ChatAppRoom");
    var chatRoomQuery = query(
      ChatRoomCollections,
      where("userEmail", "==", user.email),
      orderBy("createdAt", "asc")
    );

    getDocs(chatRoomQuery)
      .then((dbCollection) => {
        var RoomsInDb = [];
        dbCollection.forEach((doc) => {
          var DocData = { ...doc.data(), id: doc.id };
          RoomsInDb.push(DocData);
        });
        setRoomsNames(RoomsInDb);
      })
      .catch((error) => console.log(error));
  }, [room, user.email]);

  return (
    <div className="ChatRoomUI">

        <form onSubmit={HandleOnSubmitEvent}>
          
          <header className="ChatRoomHeaderUI">
            <input
              type="text"
              onChange={HandleOnChangeEvent}
              value={room}
              placeholder="Create Your Room Here"
              className="ChatRoomInput"
            />
           {room ?  <button
              onClick={HandleOnClickEvent}
              type="submit"
              className="ChatRoomButton"
            >
              Create
            </button> : <button className="ChatRoomButton" onClick={() => <h1 style={{color:"red"}}>Please Enter Room Name</h1>}>Create</button>}
            </header>
           <div>
              {roomsNames.map((dbData, idx) => (
                <p key={idx} className="RoomNamesUI">{dbData.roomName}</p>
              ))}
            </div>
          
        </form>

    </div>
  );
};

export default ChatRoom;
