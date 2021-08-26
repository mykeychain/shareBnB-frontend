import { useContext, useEffect, useState } from "react"
import ShareBnBApi from "../api"
import UserContext from "../userContext";

export default function Messages() {
    const [users, setUsers] = useState([])
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
    }, [ ])


    return (
        <div className="Messages">
            <h1>Messages</h1>
            {users.map(user => <p>{user.first_name}</p>)}
        </div>
    )
}