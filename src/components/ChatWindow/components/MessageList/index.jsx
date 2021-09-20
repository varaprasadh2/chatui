import React from 'react'
import { useMessages } from '../../../../store/utils';
import Message from '../../../Message';
import "./style.css";

function MessageList() {
    
    //
    const messages = useMessages();

    return (
        <div className="chat-body">
            {/* list of message components */}
            <div className="messages-wrapper">
                <div className="messages">
                    {
                        messages.map((message) => (
                            <Message 
                                key={message.id}
                                message={message} 
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default MessageList;
