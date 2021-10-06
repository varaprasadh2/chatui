import React, { createRef, useEffect } from 'react'
import { useCurrentUser, useMessages } from '../../../../store/utils';
import Message from '../../../Message';
import "./style.css";

function MessageList() {
    
    //
    const messages = useMessages();
    const currentUser = useCurrentUser();

    const scrollHelper = createRef();

    useEffect(()=>{
        scrollHelper.current.scrollIntoView({ behavior: "smooth" });
    })

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
                                outgoing={message.senderId===currentUser.id}
                            />
                        ))
                    }

                    <div ref={scrollHelper}></div>

                </div>
            </div>
        </div>
    )
}

export default MessageList;
