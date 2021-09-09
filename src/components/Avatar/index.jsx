
import React from 'react';

// styles
import "./style.css";

import fallbackAvatar from "./avatar.jpeg";

function Avatar({ 
    avatar,
    presence = 'offline'
 }){
    return (
        <div className="chat-thread-item-avatar-wrapper">
            <div className="chat-thread-item-avatar-container">
                <img src={avatar ? avatar : fallbackAvatar} alt="avatar"/>
            </div>
            <div className={`user-presence-indicator-wrapper ${presence}`}>
                <div className={`user-presence-indicator ${presence}`}></div>
            </div>
        </div>
    )
}

export default Avatar;
