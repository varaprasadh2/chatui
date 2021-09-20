import * as actionTypes from "../action_types";


export const channelReducer = (  state , { type, payload }) => {
    console.log("debug", {state});
    switch (type) {
        // todo
        case actionTypes.CHANNEL_SET_ACTIVE:{
            const { channelId } = payload;
            state.activeChannel = channelId;
            return { ...state };
        }
        case actionTypes.CHANNEL_NEW_MESSAGE: {
            console.log("triggering?")
            const {
                channel_id,
                message,
                author,
                currentUser
            } = payload;
            const currentUserId = currentUser.id;

            const _message = {

                id: Math.random().toString(),
                timestamp: 1631685676605,
                author: {
                    ...author,
                    self : currentUserId === author.user_id
                },
                channel_id,
                message
            }


            const channel = state.data.find(_channel => _channel.id === channel_id);
            // what if there is no channel FIXME: 
            if(channel){
                channel.messages.push(_message);
            }

            return { ...state };

        }
        default:
            return state;
    }
}



