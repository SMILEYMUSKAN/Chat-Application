import ChatMessages from "./ChatMessages";
import ChatRooms from "./ChatRooms";
import "../App.css";

var HomePage = () => {
    return (
      <div className="HomePage">
        <ChatRooms />
        <ChatMessages />
      </div>
    );
  };
  
  export default HomePage;
  