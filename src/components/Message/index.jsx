
import React, { useState } from 'react';

// styles
import "./style.css";


/**
 * 
 * @prop type => text | image | video | audio 
 * @prop content => any
 * @props status => sent | delivered | read (single tick | double tick | double tick with hightlighted color)
 */


// temporary props
function Message({ message }){

    const { message: messageBody, author } = message;

    const outgoing = author.self;
    const content = messageBody.content;
    
    return (
        <div className={`message-container ${outgoing ? 'outgoing' : ''}`}>
            <div className="message-body">
                {content}
            </div>
            <div className="message-action">
                <div className="message-meta-info">
                    <div className="meta-time">12:09 PM</div>
                    <div className="meta-status">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
