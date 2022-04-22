import {
    LOGIN,
    LOGOUT,
    REGISTER,
    SAVE_PROFILE,
    UPDATE_CHARLIE_CARD_VALUE
} from "../actions/auth-actions";

const authReducer = (state = {
    profileData: {
        username: '',
        password: '',
        name: '',
        email: '',
        userRole: '',
        dateOfBirth: new Date(),
        homeStop: '',
        charlieCardBalance: 0,
        dateJoined: new Date(),
        currentRouteConducting: '',
        favoriteRouteToConduct: '',
    }
}, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                profileData: action.response,
                isLoggedIn: true
            };
        case LOGIN:
            return {
                ...state,
                profileData: action.response,
                isLoggedIn: true
            };
        case LOGOUT:
            return {
                ...state,
                profileData: action.response,
                isLoggedIn: false
            };
        case SAVE_PROFILE:
            return {
                ...state,
                profileData: action.response,
                isLoggedIn: true
            };
        case UPDATE_CHARLIE_CARD_VALUE:
            return {
                ...state,
                profileData: action.response,
                isLoggedIn: true
            };
        default:
            return state;
    }
};

export default authReducer;