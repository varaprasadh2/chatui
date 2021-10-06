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

function ChatWindow() {
    // make a hook to getActive channel info 

    // TODO: 
    const activeChannel = useActiveChannel();
    const [store, dispatch] = useStore();
    
    const onSend = async ({ body, files }) => {
        // do api call
        const payload = {
            channelId: activeChannel.id,
            body: body,
            files,
            channelType: activeChannel.type
        }

        // handle media types
        await axios.post("/message", payload);

    }

    return (
        <StyledWindowContainer>
            {
                activeChannel ?  (
                    <>
                        <ChatHeader
                            displayName={activeChannel.displayName}
                            avatar={activeChannel.avatar}
                            actions={[]}
                        />
                        <MessageList />
                        <MessageBox onSend = {onSend} />
                    </>
                ) : (<div className="chat-fallback">Star a Conversation ...</div>)
            }

        </StyledWindowContainer>
    )
}

export default ChatWindow;
