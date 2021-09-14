import React from 'react'

import "./style.css";

function SearchBar({ placeholder }) {
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input type="text" placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default SearchBar;

