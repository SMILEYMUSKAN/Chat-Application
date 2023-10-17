import { Redirect } from "react-router-dom";
import { useRoomContext } from "../Contexts/RoomProvider";


var chatRoom = () => {
  var {
    HandleOnSubmit,
    HandleOnChange,
    room,
    HandleOnChangeName,
    name,
    toggle,
  } = useRoomContext();

  if (toggle) return <Redirect to="/chats" />;
  return (
    <div className="ChatRoomMainDivUI">
      <form onSubmit={HandleOnSubmit} className="ChatRommFormUI">
        <h1 className="ChatRoomHeaderUI">
          Create Your Room
        </h1>
     
          <input
            type="text"
            value={name}
            placeholder="Your Name"
            onChange={HandleOnChangeName}
            className="ChatRoomInputUI"
          />


          <input
            type="text"
            value={room}
            placeholder="Your Room Name"
            onChange={HandleOnChange}
            className="ChatRoomInputUI"
          />

        {room && name && (
          <button
            type="submit"
            className="ChatRoomButtonUI"
          >
            Start Chat
          </button>
        )}

        
     
      </form>
    </div>
  );
};

export default chatRoom;
