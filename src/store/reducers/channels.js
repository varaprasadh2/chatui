import * as actionTypes from "../action_types";


export const channelReducer = (  state , { type, payload }) => {
    console.log("debug", {state});
    switch (type) {
        // todo
        case actionTypes.SET_ACTIVE_CHANNEL:{
            const { channelId } = payload;
            state.activeChannel = channelId;
            return { ...state };
        }
        case actionTypes.NEW_CHANNEL_MESSAGE: {
            const newState = { ...state };

            const { message } = payload;
            
            console.log("debugger", message);
            
            // find channel 
            const channel = newState.data.find(c => c.id === message.channelId);
            channel.messages.push(message);
            return newState;
        }
        case actionTypes.LOAD_CHANNELS: {
            const newState = { ...state };

            newState.data = payload.channels;

            return newState;
        }
        default:
            return state;
    }
}



