import {FIND_ALL_PINNED_STOPS_BY_USER} from "../actions/pinned-stops-action";
import pinnedStops from "../components/profile-screen/nav-components/pinned-stops";

const PinnedStopsReducer = (state = [], action) => {
    switch (action.type){
        case FIND_ALL_PINNED_STOPS_BY_USER:
            return action.pinnedStops;
            console.log(pinnedStops)
        default:
            console.log("returned default")
            return state;
    }
}

export default PinnedStopsReducer;