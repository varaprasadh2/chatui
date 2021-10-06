import * as actionTypes from "../action_types";

export const setActiveChannel = (channelId) => ({
    type: actionTypes.SET_ACTIVE_CHANNEL,
    payload: {
        channelId: channelId
    }
});

export const loadChannels = channels => ({
    type: actionTypes.LOAD_CHANNELS,
    payload: {
        channels: channels
    }
});

export const loadNewMessage = message => ({
    type: actionTypes.NEW_CHANNEL_MESSAGE,
    payload: {
        message: message
    }
})