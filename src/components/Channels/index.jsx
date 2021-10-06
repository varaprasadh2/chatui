import React from 'react'
import { useStore } from '../../store';
import { setActiveChannel } from '../../store/actions/channels';
import { useChannels } from '../../store/utils';
import Channel from '../Channel';
import SearchBar from '../SearchBar';


import "./style.css";

// temporary    


function Channels() {
    const channels= useChannels();
    const [store, dispatch] = useStore();


    /* TODO: 
       select Channel
    */


    const actions = [
        {
            label: "Open",
            handler: (channelId) => {
                // select the channel and show messages
            }
        },
        {
            label: "Profile",
            handler: (channelId) => { 
                // show info about channel
            }

        },
        {
            label: "Add to archive",
            handler: (channelId) => { 
                // add channel to archieve
            }
        },
        {
            label: "Delete",
            handler: (channelId) => { 
                // delete the channel and its messsages for the current user
            }
        },
    ]

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
                    {(Array.isArray(channels) && channels.length) ? (
                        channels.map((channel) => {
                            return (
                                <Channel
                                    key={channel.id}
                                    displayName={channel.displayName}
                                    actions={actions}
                                    lastMessage={channel.lastMessage}
                                    type={channel.type}
                                    avatar={channel.avatar} // generate dynamic avatar 
                                    onSelect={()=>dispatch(setActiveChannel(channel.id))}
                                    active={channel.id === store.channels.activeChannel}
                                />)
                        }
                        )
                    ): (
                        <div className="channels-fallback">Start a conversation</div>
                    ) }
                </div>
                
            </div>
        </div>
    )
}

export default Channels;

