import {
    FIND_ALL_MBTA_STOPS, FIND_RAPID_TRANSIT_ROUTE_ALL_STOPS
} from "../actions/search-action";

const SearchStopReducer = (state = [], action) => {
    switch (action.type){
        case FIND_RAPID_TRANSIT_ROUTE_ALL_STOPS:
            return action.rapidRouteStops;
        case FIND_ALL_MBTA_STOPS:
            return action.MBTAStops;
        default:
            return state;
    }
}

export default SearchStopReducer;
