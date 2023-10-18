import { Redirect } from "react-router-dom";
import { useRoomContext } from "../Contexts/RoomProvider";
import { useUserContext } from "../Contexts/UserProvider";
import { useEffect } from "react";

var chatRoom = () => {
  var {
    HandleOnSubmit,
    HandleOnChange,
    room,
    HandleOnChangeName,
    name,
    toggle,
    setName,
    setRoom,
  } = useRoomContext();
  var { user } = useUserContext();

  useEffect(() => {
    setName("");
    setRoom("");
  }, [user.email]);

  if (toggle) return <Redirect to="/chats" />;
  return (
    <div className="ChatRoomMainDivUI">
      <form onSubmit={HandleOnSubmit} className="ChatRommFormUI">
<<<<<<< HEAD
        <h1 className="ChatRoomHeaderUI">Create Your Room</h1>

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
          <button type="submit" className="ChatRoomButtonUI">
            Start Chat
          </button>
        )}
=======
        <h1 className="ChatRoomHeaderUI">
          Create Your Room
        </h1>
        {inputToggle ? null : (
          <input
            type="text"
            value={name}
            placeholder="Your Name"
            onChange={HandleOnChangeName}
            className="ChatRoomInputUI"
          />
        )}

        {inputToggle ? (
          <input
            type="text"
            value={room}
            placeholder="Your Room Name"
            onChange={HandleOnChange}
            onClick={() => setInputToggle(false)}
            className="ChatRoomInputUIToggle"
          />
        ) : (
          <input
            type="text"
            value={room}
            placeholder="Your Room Name"
            onChange={HandleOnChange}
            onClick={() => setInputToggle(false)}
            className="ChatRoomInputUI"
          />
        )}

        {room && name && (
          <button
            type="submit"
            className="ChatRoomButtonUI"
          >
            Start Chat
          </button>
        )}

        <p className="text-center">or</p>
        <p className="ChatRoomParaUI">
          If u already created a room then enter your room name here
        </p>
        {inputToggle ? (
          <input
            type="text"
            value={room}
            onChange={HandleOnChange}
            className="ChatRoomInputUI"
            onClick={() => setInputToggle(true)}
          />
        ) : (
          <input
            type="text"
            value={room}
            onChange={HandleOnChange}
            className="ChatRoomInputUIToggle"
            onClick={() => setInputToggle(true)}
          />
        )}

        {inputToggle && (
          <button
            type="submit"
            className="ChatRoomButtonUI"
          >
            Continue
          </button>
        )}
>>>>>>> refs/remotes/origin/main
      </form>
    </div>
  );
};

export default chatRoom;
