import React from 'react'
import Avatar from '../../../Avatar';
import "./style.css";

import { ReactComponent as MoreIcon } from "../../../../assets/icons/themify/SVG/more.svg";


// chatuser chatuseractions
function ChatHeader({
    avatar, 
    lastActive =  "offline", // time stamp or online or offline
    displayName,
    actions = [],
}) {
    return (
        <div className="chat-header-container">
            <div className="chat-header">
                <div className="chat-user">
                    <div className="chat-user-avatar">
                        <Avatar avatar={avatar}/> {/* TODO */}
                    </div>
                    <div className="chat-user-info">
                        <h5 className="chat-user-username">{displayName}</h5>
                        <i className="muted">{lastActive}</i>
                    </div>
                </div>
                <div className="chat-user-actions">
                    <div className="chat-user-action">
                        <div className="chat-user-action-icon">
                            <MoreIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader;
