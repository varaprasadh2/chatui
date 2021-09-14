import {
  BrowserRouter as Router
} from "react-router-dom";

import './App.css';
import ChatWindow from "./components/ChatWindow";

import Sidebar from './components/Sidebar';
import TabDetailsView from "./components/TabDetailsView";
import StoreProvider from './store';


function App() {
  return (
    <Router>
      <StoreProvider>
        <div className="App">
          <div className="app-container">
            <Sidebar/>
            <div className="app-content">
              <TabDetailsView/>
              <ChatWindow/>
            </div>
          </div>
        </div>
      </StoreProvider>
    </Router>
  );
}

export default App;
