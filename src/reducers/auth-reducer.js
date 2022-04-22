import {
    LOGIN,
    LOGOUT,
    REGISTER,
    SAVE_PROFILE,
} from "../actions/auth-actions";

const authReducer = (state = {
    profile: {
        name: ''
    }
}, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                profile: action.response,
                isLoggedIn: true
            };
        case LOGIN:
            return {
                ...state,
                profile: action.response,
                isLoggedIn: true
            };
        case LOGOUT:
            return {
                ...state,
                profile: action.response,
                isLoggedIn: false
            };

        case SAVE_PROFILE:
            return {
                ...state,
                profile: action.response,
                isLoggedIn: true
            };
        default:
            return state;
    }
};

export default authReducer;