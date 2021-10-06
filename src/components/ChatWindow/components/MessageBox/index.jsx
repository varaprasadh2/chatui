import React, { useEffect, useState } from 'react'
import { ReactComponent as SendIcon } from "../../../../assets/icons/paper_plane.svg";

import "./style.css";



function MessageBox({ onSend }) {

    const [text, setText] = useState("");

    const send = async () => {
        
        if(text.trim() === "") return;

        const message = {
            body: text,
            files: []
        };

        setText("");
        typeof onSend === 'function' && onSend(message);
    }
    return (
        <div className="chat-footer-container">
            <div className="chat-footer">
                <div className="chat-input-container">
                    <input 
                        type="text" 
                        placeholder="Start typing..." 
                        value={text}
                        onChange={({ target: { value } })=>setText(value)}/>
                </div>
                <div className="chat-footer-actions">
                    <div className="chat-footer-action send" onClick={send}>
                        <div className="chat-footer-action-icon">
                            <SendIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageBox;
