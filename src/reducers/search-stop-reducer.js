import {FIND_ALL_MBTA_STOPS, FIND_RAPID_TRANSIT_ROUTE_ALL_STOPS, FIND_STOP_BY_ID} from "../actions/search-action";

const SearchStopReducer = (state = [], action) => {
    switch (action.type){
        case FIND_RAPID_TRANSIT_ROUTE_ALL_STOPS:
            return action.rapidRouteStops;
        case FIND_ALL_MBTA_STOPS:
            console.log(action.MBTAStops, " in reducer")
            return action.MBTAStops;
        case FIND_STOP_BY_ID:
            return action.singleStop;
        default:
            return state;
    }
}

export default SearchStopReducer;