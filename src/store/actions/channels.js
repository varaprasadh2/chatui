import * as actionTypes from "../action_types";

export const setActiveChannel = (channelId) => ({
    type:  actionTypes.CHANNEL_SET_ACTIVE,
    payload: {
        channelId: channelId
    }
});
