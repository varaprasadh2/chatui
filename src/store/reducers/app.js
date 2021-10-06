import * as actionTypes from "../action_types";

export const appReducer = (state, { type, payload }) => {
    // do this
   switch(type){
       case actionTypes.SET_USER:
          {
               const newState = { ...state };
               newState.user = payload.user;
               return newState;
          }
        case actionTypes.SET_USER_CHANNEL: 
         {
               const newState = { ...state };
               newState.userChannel = payload.channel;
               return newState;
         }
       default:
           return state;
   }
}