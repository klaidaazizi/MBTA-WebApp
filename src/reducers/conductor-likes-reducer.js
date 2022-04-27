import {
    CONDUCTOR_LIKE_ALREADY_EXISTS,
    FIND_ALL_COMMUTER_LIKES,
    FIND_ALL_CONDUCTOR_LIKES
} from "../actions/conductor-likes-action";

const ConductorLikesReducer = (state = [], action) => {
    switch (action.type){
        case FIND_ALL_COMMUTER_LIKES:
            return action.commuterLikes;
        case CONDUCTOR_LIKE_ALREADY_EXISTS:
            return action.conductorLikeExists;
        case FIND_ALL_CONDUCTOR_LIKES:
            return action.conductorlikes;
        default:
            return state;
    }
}

export default ConductorLikesReducer;