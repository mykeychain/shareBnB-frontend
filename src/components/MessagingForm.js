import { useState } from "react";

export default function MessagingForm({ sendMessage }) {
    const [message, setMessage] = useState("");

    function handleChange(evt) {
        setMessage(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        sendMessage(message.trim());
        setMessage("");
    }
    return (
        <div className="MessagingForm ">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input className="MessagingFormInput form-control" onChange={handleChange} value={message}>
                    </input>
                    <button className="btn btn-primary"><i className="bi bi-capslock-fill"></i></button>
                </div>
            </form>
        </div>
    )
}