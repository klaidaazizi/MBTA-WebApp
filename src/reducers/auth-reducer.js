import {
    LOGIN,
    LOGOUT,
    REGISTER,
    LOGGED_IN,
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
        case LOGGED_IN:
            return {
                ...state,
                message: action.response,
            };
        default:
            return state;
    }
};

export default authReducer;