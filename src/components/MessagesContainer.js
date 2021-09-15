import { useContext, useEffect, useState } from "react"
import ShareBnBApi from "../api"
import UserContext from "../userContext";
import Conversation from "./Conversation";
import MessagedUserList from "./MessagedUserList";
import MessagingForm from "./MessagingForm";
import NewMessageModal from "./NewMessageModal";

/** MessagesContainer
 * 
 *  Messaging page to have conversations with other users
 * 
 *  State:
 *      - users
 *      - selectedUserId
 *      - messages
 *      - message
 *      - messagingUser
 *      
 *  Context:
 *      - currentUser
 *  
 *  Routes -> MessagesContainer -> { MessagedUserList, Conversation, MessagingForm }
 */
export default function MessagesContainer() {
    const [users, setUsers] = useState([])
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messagingUser, setMessagingUser] = useState("");

    const { currentUser } = useContext(UserContext);

    useEffect(function getUsersOnMount() {
        async function _getUsersOnMount() {
            const messages = await ShareBnBApi.getAllMessages();
            const userIds = new Set();
            const newUsers=[];
            messages.forEach(message => {
                if (message.to_user_id === currentUser.id && !(userIds.has(message.from_user_id))) {
                    userIds.add(message.from_user_id);
                    newUsers.push(message.from_user);
                } else if (!(userIds.has(message.to_user_id)) && message.from_user_id === currentUser.id) {
                    userIds.add(message.to_user_id);
                    newUsers.push(message.to_user);
                }
            })
            setUsers(newUsers);
        };

        _getUsersOnMount();
    }, []);

    useEffect(function getMessages() {
        async function _getMessages() {
            const messages = await ShareBnBApi.getConversation(selectedUserId);
            setMessages(messages);

        }
        if (selectedUserId) _getMessages();
    }, [selectedUserId]);

    function changeSelected(evt) {
        setSelectedUserId(evt.target.dataset.userid);
        setMessagingUser(evt.target.innerHTML);
    }

    async function sendMessage(message, toUserId=selectedUserId) {
        const msg = await ShareBnBApi.send(toUserId, message);
        setMessages([...messages, msg]);
    }

    return (
        <div className="MessagesContainer col-11 mx-auto mt-3 p-0">
            <div className="MessagesHeader row"> 
                <div className="col-3">
                    <h1>Messages</h1>
                </div>
                <div className="col-8">
                    {selectedUserId && <h1>{messagingUser}</h1>}
                </div>
                <NewMessageModal sendMessage={sendMessage} />
            </div> 
            
            <div className='row mt-2'>
                <div className="col-3">
                    <MessagedUserList
                        selectedUserId={selectedUserId}
                        changeSelected={changeSelected}
                        users={users} />
                </div>
                <div className="col-9">
                    <Conversation messages={messages}/>
                    <div className="mb-3 mt-5">
                        {selectedUserId && <MessagingForm sendMessage={sendMessage}/>}
                    </div>
                </div>
            </div>
            
        </div>
    )
}