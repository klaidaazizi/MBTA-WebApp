import {FIND_ALL_PINNED_STOPS_BY_USER, PIN_ALREADY_EXISTS} from "../actions/pinned-stops-action";

const PinnedStopsReducer = (state = [], action) => {
    switch (action.type){
        case FIND_ALL_PINNED_STOPS_BY_USER:
            return action.pinnedStops;
        case PIN_ALREADY_EXISTS:
            return action.pinExists;
        default:
            return state;
    }
}

export default PinnedStopsReducer;