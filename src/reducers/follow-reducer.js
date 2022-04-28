import {
    FIND_ALL_FOLLOWS_BY_USER,
    FIND_ALL_USER_FOLLOWERS,
    FOLLOW_ALREADY_EXISTS
} from "../actions/follow-actions";

const FollowReducer = (state = [], action) => {
    switch (action.type){
        case FIND_ALL_USER_FOLLOWERS:
            return action.followers;
        case FIND_ALL_FOLLOWS_BY_USER:
            return action.following;
        case FOLLOW_ALREADY_EXISTS:
            return action.followExists;
        default:
            return state;
    }
}

export default FollowReducer;