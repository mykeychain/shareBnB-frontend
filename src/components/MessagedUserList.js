import { Link } from "react-router-dom";
import "./MessagedUserList.css"

/** MessagedUserList
 * 
 *  Generates list of messaged users
 * 
 *  Props:
 *      - users
 *      - changedSelected
 *  
 *  MessagesContainer -> MessagedUserList
 */
export default function MessagedUserList({ selectedUserId, changeSelected, users }) {
    return (
    <div className='MessagedUserList list-group'>
        {users.map(user => (
            <Link
                to="#"
                className={`list-group-item list-group-item-action ${+selectedUserId === user.id ? 'selected' : ''}`} 
                key={user.id} data-userid={user.id} 
                onClick={changeSelected}>{user.first_name} {user.last_name}
            </Link>
        ))}
    </div>
    )
}