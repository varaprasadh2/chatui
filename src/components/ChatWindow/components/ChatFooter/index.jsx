import React, { useEffect } from 'react'
import { ReactComponent as SendIcon } from "../../../../assets/icons/paper_plane.svg";
import { pusher } from '../../../../store';

import "./style.css";

const channel = pusher.subscribe("chat");

function ChatFooter({ onSend }) {

    useEffect(()=>{
        channel.subscribe();

        channel.bind('client-message', (data)=>{
            console.log({
                incoming: data
            });
        });
        return ()=> channel.unbind('client-message', ()=>{});
    },[])
    const send = () => {
        console.log({
            subscribed: channel.subscribed
            
            })
        channel.trigger('client-message', "here we gooo");
  
        console.log("???")

    }
    return (
        <div className="chat-footer-container">
            <div className="chat-footer">
                <div className="chat-input-container">
                    <input type="text" placeholder="Start typing..."/>
                </div>
                <div className="chat-footer-actions">
                    <div className="chat-footer-action send" onClick={send}>
                        <div className="chat-footer-action-icon">
                            <SendIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatFooter;
