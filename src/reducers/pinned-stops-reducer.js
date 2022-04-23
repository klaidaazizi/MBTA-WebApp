import {
    FIND_ALL_PINNED_STOPS_BY_USER,
    FIND_ALL_USERS_WHO_PINNED_STOP,
    PIN_ALREADY_EXISTS
} from "../actions/pinned-stops-action";

const PinnedStopsReducer = (state = [], action) => {
    switch (action.type){
        case FIND_ALL_PINNED_STOPS_BY_USER:
            return action.pinnedStops;
        case PIN_ALREADY_EXISTS:
            return action.pinExists;
        case FIND_ALL_USERS_WHO_PINNED_STOP:
            console.log("in pinned reducer")
            return action.usersWhoPinnedStops;
        default:
            return state;
    }
}

export default PinnedStopsReducer;