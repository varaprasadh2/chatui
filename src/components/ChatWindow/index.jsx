import React from 'react'
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';
import ChatHeader from './components/ChatHeader';

import "./style.css";

function ChatWindow() {
    return (
        <div className="chat-window-container">
            <ChatHeader/>
            <ChatBody/>
            <ChatFooter/>
        </div>
    )
}

export default ChatWindow;
