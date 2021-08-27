import { useContext } from 'react';
import { MessageList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import UserContext from '../userContext';
import "./Conversation.css";


export default function Conversation({ messages }) {
    const { currentUser } = useContext(UserContext);

    const dataSource = messages.map(message => ({
        position: message.from_user_id === currentUser.id ? "right" : "left",
        type: 'text',
        text: message.text,
        date: new Date(message.timestamp),
    }))

    return (
        <div className="Conversation">
            <div>
                <MessageList 
                    className="message-list"
                    dataSource={dataSource}
                    toBottomHeight={1000}/>
            </div>
        </div>
    )
}