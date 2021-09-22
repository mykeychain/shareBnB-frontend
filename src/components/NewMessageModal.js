import { useState } from "react";
import MessagingForm from "./MessagingForm";

export default function NewMessageModal({ sendMessage, host }) {
    const [showModal, setShowModal] = useState(false);

    async function handleSend(message) {
        await sendMessage(message, host.id);
        toggleShowModal();
    }

    function toggleShowModal() {
        setShowModal(prevState => !prevState);
    }

    return (
        <div className="col">
            <button
                type="button"
                className="btn btn-primary"
                onClick={toggleShowModal}>
                <i className="bi bi-pencil-square"></i> Message the host
            </button>

            {showModal && (<div className="modal" style={{display: "block"}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="messageModalLabel">
                                { `${host.first_name} ${host.last_name}`}
                            </h5>
                            <button onClick={toggleShowModal} type="button" className="btn-close"></button>
                        </div>
                        <div className="modal-body">
                            <MessagingForm sendMessage={handleSend}/>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}