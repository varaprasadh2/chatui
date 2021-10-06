
import React from 'react';

// styles
import "./style.css";


/**
 * 
 * @prop type => text | image | video | audio 
 * @prop content => any
 * @props status => sent | delivered | read (single tick | double tick | double tick with hightlighted color)
 */


// temporary props
function Message({ message, outgoing }){

    console.log({
        message
    });
    
    return (
        <div className={`message-container ${outgoing ? 'outgoing' : ''}`}>
            <div className="message-body">
                {message.body}
            </div>
            <div className="message-action">
                <div className="message-meta-info">
                    <div className="meta-time">{(new Date(message.createdAt)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
                    <div className="meta-status">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
