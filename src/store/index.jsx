import React, { useContext, useEffect, useReducer } from 'react'

import { ChatContext } from "./context";


import { rootReducer, initialState } from "./reducers";

import Pusher from 'pusher-js';



export const pusher = new Pusher("be42df8733a2a17f2fcc", {
    cluster: 'ap2',
    forceTLS: true,
    authEndpoint:"http://localhost:3001/pusher/auth",
    auth: {
        params:{
            accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhNDBjOTg3MS1iMzE1LTQ3NWQtOTExZi02ODM1ZjgxNmU1OWIiLCJlbWFpbCI6Im1hcmt6dWNrQHRlc3QuY29tIiwiaWF0IjoxNjMyMTE1MzI5fQ.eCttHLkNe186Bu15mk0IOxBLEylRPlOfdLWP7zjWWFY'
        }
    }
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
