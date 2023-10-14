
import { useChatMessagesContext } from "../Contexts/ChatMessagesProvider";
import { useChatRoomContext } from "../Contexts/ChatRoomProvider";



var ChatMessages = () => {

   var { Message, HandleOnSubmitoOfChatMessages, HandleOnChangeOfChatMessages,  setMessage, empty} = useChatMessagesContext();
   var { empty } = useChatRoomContext();
   


    return empty.length > 0 ? <div className="chatMessagesUI">
        <section className="MessagesSectionUI">
  
        </section>
         <form onSubmit={ HandleOnSubmitoOfChatMessages } className="FormSection">
            <input className="InputUI" placeholder="Enter Your Message....." onChange={ HandleOnChangeOfChatMessages } value={ Message }/> 
            <button type="submit" className="ButtonUI">Send</button>
        </form> 
        
    </div> : <div className="ChatMessageFalseUI">Create Your First Room To Start Conversation</div>
}

export default ChatMessages;