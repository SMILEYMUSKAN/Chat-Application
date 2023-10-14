import { useChatRoomContext } from "../Contexts/ChatRoomProvider";

var ChatRooms = () => {
  var { room, setRoom, HandleOnChangeofChatRoom, HandleOnSubmitOfChatRoom, HandleOnClickofChatRoom } = useChatRoomContext();
    return <div className="ChatRoomUI">
        <nav className="NavSection">
       <form onSubmit={ HandleOnSubmitOfChatRoom } className="ChatRoomForm">
        <input onChange={ HandleOnChangeofChatRoom } placeholder="Enter Your Room Name" value={room} className="ChatRoomInput"/>
        <button type="submit" className="ChatRoomButton" >Create</button>
       </form>
       </nav> 
       <hr />
       <section>

       </section>
    </div>
};

export default ChatRooms;