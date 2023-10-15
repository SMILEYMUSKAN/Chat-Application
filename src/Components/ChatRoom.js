import { useEffect } from "react";
import { useRoomContext } from "../Contexts/RoomProvider";

var chatRoom = () => {
  var { HandleOnSubmit, HandleOnChange, room, HandleOnChangeName, name } =
    useRoomContext();

  return (
    <div className="w-5/12 h-96 mt-8 flex flex-col items-center justify-start mx-auto rounded">
      <form onSubmit={HandleOnSubmit} className="flex flex-col gap-5">
        <h1 className="text-3xl mb-4 text-fuchsia-500 mt-6">
          Create Your Room
        </h1>
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={HandleOnChangeName}
          className="shadow pb-4 pl-4 pt-2 w-96 border-fuchsia-500  bg-white text-slate-900 border-b-2 border-fuchsia-500 focus:outline-none"
        />
        <input
          type="text"
          value={room}
          placeholder="Your Room Name"
          onChange={HandleOnChange}
          className="shadow pb-4 pl-4 pt-2 w-96 border-fuchsia-500  bg-white text-slate-900 border-b-2 border-fuchsia-500 focus:outline-none"
        />
        {room && name && (
          <button
            type="submit"
            className="bg-fuchsia-500 text-center rounded w-96 p-2 mt-10 mb-4 text-white transition hover:bg-fuchsia-700 shadow"
          >
            Start Chat
          </button>
        )}
      </form>
    </div>
  );
};

export default chatRoom;
