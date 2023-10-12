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
  }, [user.email]);

  return (
    <div>
      <div className="ScrollBarUI">
        <form onSubmit={HandleOnSubmitEvent}>
          <h1 className="HeadingUI">Create Your Room Here</h1>
          <header className="ScrollBarHeader">
            <input
              type="text"
              onChange={HandleOnChangeEvent}
              value={room}
              placeholder="Room Name"
              className="ScrollBarInput"
            />
            <button
              onClick={HandleOnClickEvent}
              type="submit"
              className="ScrollBarButtonUI"
            >
              {" "}
              Create{" "}
            </button>
            <div>
              {roomsNames.map((dbData, idx) => (
                <p key={idx}>{dbData.roomName}</p>
              ))}
            </div>
          </header>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
