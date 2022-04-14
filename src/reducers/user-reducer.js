import {
    CREATE_USER,
    FIND_ALL_USERS,
    FIND_USER_BY_USERNAME,
    UPDATE_USER,
    DELETE_USER
} from "../actions/user-actions";

const userReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_USER:
            return [
                action.newUser,
                ...state
            ];
        // case FIND_ALL_USERS:
        //     return action.users;
        case FIND_USER_BY_USERNAME:
            return action.user;
        case DELETE_USER:
            return state.filter(
                user => user._id !== action.user._id);
        case UPDATE_USER:
            return state.map(user => user._id === action.user._id ? action.user : user);
        default:
            return state;
    }

};

export default userReducer;