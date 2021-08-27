import { useContext, useEffect, useState } from "react"
import ShareBnBApi from "../api"
import UserContext from "../userContext";
import Conversation from "./Conversation";
import "./Messages.css";

export default function Messages({}) {
    const [users, setUsers] = useState([])
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [messages, setMessages] = useState([]);
    const { currentUser } = useContext(UserContext);
    const [message, setMessage] = useState("");
    const [messagingUser, setMessagingUser] = useState("");

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

    function handleChange(evt) {
        setMessage(evt.target.value);
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        const msg = await ShareBnBApi.send(selectedUserId, message);
        setMessage("");
        setMessages([...messages, msg]);
    }

    return (
        <div className="Messages container mt-2 p-0">
            <div class="MessagesHeader"> 
                <h1 class='flex-items'>Messages</h1>
                {selectedUserId && <h1 class='flex-items'>{messagingUser}</h1>}
            </div> 
            
            <div className='row mt-2'>
                <div className='Messages-user-list col-3 list-group'>
                    {users.map(user => (
                        <a
                            className='list-group-item list-group-item-action' 
                            key={user.id} data-userid={user.id} 
                            onClick={changeSelected}>{user.first_name} {user.last_name}
                        </a>))}
                </div>
                <div className="Messages-conversation-box col">
                    <Conversation messages={messages}/>
                </div>
                    {selectedUserId && 
                    <div className="Conversation-form offset-3 col-9">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input className="Conversation-chat-input form-control" onChange={handleChange} value={message}>
                                </input>
                                <button className="btn btn-primary"><i class="bi bi-capslock-fill"></i></button>
                            </div>
                        </form>
                    </div>
                    }
            </div>
            
        </div>
    )
}