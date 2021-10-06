import * as actionTypes from "../action_types";

export const setUser = (user) => ({
    type: actionTypes.SET_USER,
    payload: {
        user: user
    }
});

export const setUserChannel = (channel) => ({
    type: actionTypes.SET_USER_CHANNEL,
    payload: {
        channel: channel
    }
});
