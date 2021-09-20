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
import StoreProvider from './store';



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
