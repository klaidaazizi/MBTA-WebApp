import {
    LOGIN,
    LOGOUT,
    REGISTER,
    SAVE_PROFILE,
} from "../actions/auth-actions";

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                message: action.response,
                isLoggedIn: true
            };
        case LOGIN:
            return {
                ...state,
                message: action.response,
                isLoggedIn: true
            };
        case LOGOUT:
            return {
                ...state,
                message: action.response,
                isLoggedIn: false
            };

        case SAVE_PROFILE:
            return {
                ...state,
                message: action.response,
                isLoggedIn: true
            };
        default:
            return state;
    }
};

export default authReducer;