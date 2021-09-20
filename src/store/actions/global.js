import * as actionTypes from "../action_types";

export const setUser = (user) => ({
    type: actionTypes.SET_USER,
    payload: {
        user: user
    }
});



