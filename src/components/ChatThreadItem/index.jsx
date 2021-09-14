import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

// styles
import "./style.css";

// assets

import moreIcon from "../../assets/icons/more.png";

// components
import Avatar from "../Avatar";

/**
 * 
 * @prop avatar profile picture of a user
 * @prop displayName 
 * @prop message  -> last message
 * @prop presence -> online | offline | away
 * @prop actions -> Array<Action> Action = { label:String, handler:Function }
 * 
 * 
 */ 

function ThreadItem(
    { 
        avatar, 
        displayName ,
        message,
        unreadCount = 0, 
        presence = 'offline',
        actions = []
    }) {
        
    const [showMenu, setShowMenu] = useState(false);

    const normalizedUnreadCount = unreadCount.toString().length <=3 ? unreadCount : '999+';

    return (
        <OutsideClickHandler  onOutsideClick={()=>setShowMenu(false)}>
            <div className="chat-thread-item-wrapper-outer">
                <div className="chat-thread-item-wrapper">
                    <div className="chat-thread-item-wrapper-innner">
                        <div>
                            <Avatar presence={presence} avatar={avatar}/>
                        </div>
                        <div className="chat-thread-item-main-wrapper">
                            <div className="chat-thread-item-username-wrapper">
                                <h5 className="chat-thread-item-username">{displayName}</h5>
                            </div>
                            <div className="chat-thread-item-main-content">
                                {message}
                            </div>
                        </div>
                        <div className="chat-thread-item-right-section">

                            {unreadCount > 0 && (
                                <div className="chat-thread-item-unread-count-wrapper">
                                    <div className="chat-thread-item-unread-count">{normalizedUnreadCount}</div>
                                </div>
                            )}
                            {
                                Array.isArray(actions) && actions.length > 0 && (
                                    <div className="chat-thread-item-menu-wrapper" style={showMenu ? { display:'block' }:{}}>
                                        <div className="chat-thread-item-menu-icon-wrapper">
                                            <div className="chat-thread-item-menu-icon-wrapper-inner"> 
                                                <img className="chat-thread-item-menu-icon" src={moreIcon} alt="options"  onClick={()=>setShowMenu(!showMenu)}/>
                                                {
                                                    showMenu && (
                                                        <div className="chat-thread-item-menu-options-container">
                                                            {
                                                                actions.map(({ label, handler }, index) => (
                                                                    <div key={index} className="chat-thread-item-menu-option" onClick={handler}>{label}</div>
                                                                ))
                                                            }
                                        
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </OutsideClickHandler>
    )
}

export default ThreadItem;

