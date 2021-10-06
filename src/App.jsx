import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import axios from 'axios';


import './App.css';
import ChatWindow from "./components/ChatWindow";

import Sidebar from './components/Sidebar';
import TabDetailsView from "./components/TabDetailsView";
import { LoginPage, SignUpPage } from "./pages/Authentication";
import StoreProvider, { pusher, useStore } from './store';
import { useEffect } from "react";
import { loadChannels, loadNewMessage } from "./store/actions/channels";
import { setUser } from "./store/actions/app";



axios.defaults.baseURL = process.env.API_BASE_URL || 'http://localhost:3001';

axios.interceptors.request.use(function (config) {
  const { accessToken } = JSON.parse(localStorage.getItem('auth') || '{}');

  config.headers.Authorization = `Bearer ${accessToken}`;
  config.withCredentials = true;
  
  return config;
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response.status === 401) {
     window.location.href='/login';
  }
  return error;
});



function Chat(){

  const [store, dispatch] = useStore();

  useEffect(async ()=>{
    // load the channels and subscribe and create a own channel for portable 
    // load the friends without pagination for now

    try {

      const { user } = await axios.get("/me").then(res=>res.data);
      const response = await axios.get("/channels").then(res => res.data);
      const { channels = [] } = response;

      // subscribe to own user id and store it in the 
      const subscribedChannels = channels.map(channel=> {
         
         const newChannel = {
           ...channel,
           messages: []
         };

         // set displayName 
        if(channel.type === 0){
          const { firstName, lastName, avatar } = channel.participants.find(person => person.id != user.id);
          newChannel.displayName = `${firstName} ${lastName}`;
          newChannel.avatar = avatar;
        }
        
        const newConnection = pusher.subscribe(`presence-${channel.id}`);
        newConnection.bind('MESSAGE', ({ message }) => {
          console.log("event gets triggered...");
          
            if(message){
              dispatch(loadNewMessage(message));
            }
          });
         newChannel.connection = newConnection;
         return newChannel;
      });

      dispatch(setUser(user));
      dispatch(loadChannels(subscribedChannels));

    } catch (error) {
      // alert("something went wrong", error);
      console.log("something went wrong fetching channels", error);
    } 
    return ()=> {
      // get the channels from store and unbind all events
      // FIXME: do it later 
    }
  },[]);

  return (
    <div className="App">
      <div className="app-container">
        <Sidebar />
        <div className="app-content">
          <TabDetailsView />
          <ChatWindow />
        </div>
      </div>
    </div>
  )
};

function App() {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={SignUpPage}/>
          <Route path="/" component={Chat}/>
        </Switch>
      </StoreProvider>
    </Router>
  );
}

export default App;
