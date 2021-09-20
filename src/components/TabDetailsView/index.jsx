import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import Channels from '../Channels'
import Friends from '../Friends';

import "./style.css";


function TabDetailsView({  }) {

    return (
       <div className="tab-details-view-container">
           <Switch>
                <Route path="/Chat" render={()=><Channels/>}/>
                <Route path="/Friends" render={()=><Friends />}/> 
                <Route path="/Favourites" render={()=><Friends />}/>
           </Switch>
       </div>
    )
}

export default TabDetailsView
