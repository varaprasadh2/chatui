import React, { useContext, useEffect, useReducer } from 'react'

import { ChatContext, initialState } from "./context";

import { rootReducer } from "./reducers";

import Pusher from 'pusher-js';



export const pusher = new Pusher("d34060bc154d925283f8", {
    cluster: 'eu',
    forceTLS: true,
    authEndpoint: "https://pusher-auth.now.sh/auth",
    authTransport: 'jsonp'
});

pusher.connection.bind( 'error', function( err ) {
    console.log({
        err
    });
  });
  

/*

    useStore => store, dispatch

*/

export const useStore = () =>{
    return useContext(ChatContext);
}

function StoreProvider({ children }) {
    const store = useReducer(rootReducer, initialState);

    useEffect(()=>{

    },[])
    return (
      <ChatContext.Provider value={store}>
          {children}
      </ChatContext.Provider>
    )
}

export default StoreProvider;



// should be a channel class 
/**
    channnels (sorted by last activity);
        - messages
    {
        channelID : {
            subscriptions:[], 
            lastActivity : last message object,
            ...info {
                participants
            }
            messages: [Message]
        },

    }
 */