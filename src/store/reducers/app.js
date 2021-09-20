import * as actionTypes from "../action_types";

export const appReducer = (state, { type, payload }) => {
    // do this
   switch(type){
       case actionTypes.SET_USER:
           const newState = { ...state };
           newState.user = payload.user;
           console.log("setting user here...", newState);
           
           return newState;
       default:
           return state;
   }
}