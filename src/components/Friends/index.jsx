import React from 'react'
import SearchBar from '../SearchBar';
import "./style.css";

function Friends() {
    return (
       <div className="friends-list-container">
           <div className="friend-list-container-inner">
                <div className="action-section">
                    <h2 className="title">Friends</h2>
                    <div className="search-bar-wrapper">
                        <SearchBar placeholder="Search friends"/>
                    </div>
                </div>
           </div>
       </div>
    )
}

export default Friends;
