import React, { useEffect } from 'react'
import { useActiveChannel } from '../../store/utils';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import ChatHeader from './components/ChatHeader';

import { pusher, useStore } from '../../store';

import axios from 'axios';
import styled from 'styled-components';



const StyledWindowContainer = styled.div`
    flex: 1;
    background: rgb(236, 236, 236);
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

// subscribe to multiple channels from here ?

const pusher_channel = pusher.subscribe("presence-pusher-channel");


function ChatWindow() {
    // make a hook to getActive channel info 

    // TODO: 
    const activeChannel = useActiveChannel();
    const [store, dispatch] = useStore();

    useEffect(async ()=>{
        try{
            const response = await axios.get("/channels").then(res => res.data);
            console.log({
                response
            });
        }catch(error){
            console.log("something went wrong fetching channels");
        }

    },[])

    useEffect(()=>{

        pusher_channel.bind('message', (message)=>{
            console.log("debug", {
                message
            });
            dispatch({
                type: "CHANNEL_NEW_MESSAGE",
                payload: {
                    ...message,
                    currentUser: store.user
                }
            });
        });    
        return () => pusher_channel.unbind('message', ()=>{});
    },[])
    

    console.log({
        activeChannel
    });

    const onSend = async message => {
        // do api call
        console.log(message);
        const payload = {
            channel_id: activeChannel.id,
            message: message,
            author: {
                user_id: store.user.id
            }
        }

        // handle media types
        await fetch("http://localhost:3001/message", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(payload),
        });

    }

    return (
        <StyledWindowContainer>
            {
                activeChannel ?  (
                    <>
                        <ChatHeader
                            displayName={activeChannel.channel_name}
                        />
                        <MessageList

                        />
                        <MessageBox onSend = {onSend} />
                    </>
                ) : (

                    <div className="chat-fallback">Star a Conversation ...</div>
                    
                    )
            }

        </StyledWindowContainer>
    )
}

export default ChatWindow;
