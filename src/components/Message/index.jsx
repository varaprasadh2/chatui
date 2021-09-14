
import React from 'react';

// styles
import "./style.css";


/**
 * 
 * @prop type => text | image | video | audio 
 * @prop content => any
 * @returns 
 */


// @prop incoming temporary

// temporary props
function Message({ message, outgoing = false }){
    const { type, content } = message;

    return (
        <div className={`message-container ${outgoing ? 'outgoing' : ''}`}>
            <div className="message-body">
                {content}
            </div>
            <div className="message-action"></div>
        </div>
    )
}

export default Message
