import React, { useEffect, useState } from 'react'
import {
    useHistory
} from 'react-router-dom';

import "./style.css";

import { ReactComponent as ChatIcon } from "../../assets/icons/themify/SVG/comment-alt.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/themify/SVG/user.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/themify/SVG/star.svg";

import { ReactComponent as PencilIcon } from "../../assets/icons/themify/SVG/pencil.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/themify/SVG/settings.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/themify/SVG/power-off.svg";
import { useStore } from '../../store';


const TABS = {
    "CHAT" : "Chat",
    "FRIENDS": "Friends",
    "FAVORITES": "Favorites",
    "EDIT_PROFILE":"Edit Profile",
    "SETTINGS":"Settings",
    "LOGOUT":"Logout"
}

function SideBar({ }) {
    const [activetab, setActiveTab] = useState("Chat");
    const [ store, dispatch] = useStore();

    const history = useHistory();

    useEffect(()=>{
        history.push(TABS.CHAT);
    },[]);

    function SideBarItem({ active, icon, label, onClick }){

        return (
            <div className={`sidebar-item ${active && 'active'}`} onClick={()=>onClick(label)}>
                <div className="sidebar-item-icon">{icon}</div>
                <div className="sidebar-item-label">{label}</div>
            </div>
        )
    }

    const handleTabChange = (tab) => {
        if(tab === TABS.CHAT || tab === TABS.FAVORITES || tab === TABS.FRIENDS){
            console.log({
                history, tab
            })
            history.push(tab);
            return setActiveTab(tab);
        }
        // open modals
    }

    return (
        <div className="sidebar">
            <div className="app-logo"></div>
            <div className="sidebar-item-group">
                <SideBarItem active={activetab === TABS.CHAT} icon={<ChatIcon/>} label={TABS.CHAT} onClick={handleTabChange}/>
                <SideBarItem active={activetab === TABS.FRIENDS} icon={<PersonIcon/>} label={TABS.FRIENDS} onClick={handleTabChange}/>
                <SideBarItem active={activetab === TABS.FAVORITES} icon={<StarIcon/>} label={TABS.FAVORITES} onClick={handleTabChange}/>
            </div>
            <div className="sidebar-item-group bottom">
                <SideBarItem icon={<PencilIcon/>} label={TABS.EDIT_PROFILE} onClick={handleTabChange}/>
                <SideBarItem icon={<SettingsIcon/>} label={TABS.SETTINGS} onClick={handleTabChange}/>
                <SideBarItem icon={<LogoutIcon/>} label={TABS.LOGOUT} onClick={handleTabChange}/>
            </div>
        </div>
    )
}

export default SideBar;
