import React from 'react'
import ThreadItem from '../ChatThreadItem';
import SearchBar from '../SearchBar';


import "./style.css";

// temporary
const actions = [
    {
        label : "Open",
        handler : () => {}
    },
    {
        label : "Profile",
        handler : () => {}
    },
    {
        label : "Add to archive",
        handler : () => {}
    },
    {
        label : "Delete",
        handler : () => {}
    },
]

function ChatThreads() {
    return (
        <div className="chat-threads-container">
            <div className="chat-threads-container-inner">
                <div className="action-section">
                    <h2 className="title">Chat</h2>
                    <div className="search-bar-wrapper">
                        <SearchBar placeholder="Search chat"/>
                    </div>
                </div>
                <div className="chat-threads">
                    <ThreadItem displayName="john doe" actions={actions} presence="online" message="lorem ipsum tengnks gsgsg ssgsgsgsgs gs" unreadCount={10}/>
                    <ThreadItem displayName="mark zuck" actions={actions} presence="offline" message="lorem ipsum tengnks gsgsg ssgsgsgsgs gs" unreadCount={10}/>
                    <ThreadItem displayName="william lin" actions={actions} presence="away" message="lorem ipsum tengnks gsgsg ssgsgsgsgs gs" unreadCount={10}/>
                    <ThreadItem displayName="ben awad" actions={actions} presence="online" message="lorem ipsum tengnks gsgsg ssgsgsgsgs gs" unreadCount={10}/>
                </div>
                
            </div>
        </div>
    )
}

export default ChatThreads;

