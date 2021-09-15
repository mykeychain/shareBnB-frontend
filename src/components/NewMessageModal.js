import { useState } from "react";
import MessagingForm from "./MessagingForm";

export default function NewMessageModal({ sendMessage }) {
    const [toUser, setToUser] = useState("");

    function handleChange(evt) {
        const value = evt.target.value;
        setToUser(value);
    }

    function handleSend(message) {
        sendMessage(message);
    }

    return (
        <div className="col-1">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="bi bi-pencil-square"></i>
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                <input className="form-control" type="text" value={toUser} onChange={handleChange} placeholder="Who would you like to message?" />
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <MessagingForm sendMessage={handleSend}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}