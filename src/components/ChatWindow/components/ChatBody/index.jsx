import React from 'react'
import Message from '../../../Message';
import "./style.css";

function ChatBody() {
    return (
        <div className="chat-body">
            {/* list of message components */}
            <div className="messages-wrapper">
                <div className="messages">
                  
                    <Message message={{content:"lorem ipsum test"}} outgoing/>
                    <Message message={{content:"lorem ipsum test"}} />
                    <Message message={{content:"lorem ipsum test"}} outgoing/>
                    <Message message={{content:"lorem ipsum test"}} />
                    <Message message={{content:"lorem ipsum test"}} />
                </div>
            </div>
        </div>
    )
}

export default ChatBody;
