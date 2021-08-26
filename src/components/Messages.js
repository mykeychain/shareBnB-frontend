import { useContext, useEffect, useState } from "react"
import ShareBnBApi from "../api"
import UserContext from "../userContext";
import Conversation from "./Conversation";
import "./Messages.css";

export default function Messages() {
    const [users, setUsers] = useState([])
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [messages, setMessages] = useState([]);
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
    }


    return (
        <div className="Messages container mt-2">
            <h1>Messages</h1>
            <div className='row'>
                <div className='Messages-user-list col-3'>
                    {users.map(user => <p key={user.id} data-userid={user.id} onClick={changeSelected}>{user.first_name}</p>)}
                </div>
                <div className="Messages-conversation-box col">
                    <Conversation messages={messages}/>
                    <div className="Conversation-form">
                        <form className="">
                            <div className="input-group">
                                <input className="Conversation-chat-input form-control">
                                </input>
                                <button className="btn btn-primary"><i class="bi bi-capslock-fill"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}