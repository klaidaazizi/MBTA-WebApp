import {FIND_RAPID_TRANSIT_ROUTE_ALL_STOPS} from "../actions/search-action";

const SearchStopReducer = (state = [], action) => {
    switch (action.type){
        case FIND_RAPID_TRANSIT_ROUTE_ALL_STOPS:
            console.log("in herrrreee")
            return action.rapidRouteStops;
        default:
            console.log("returned default")
            return state;
    }
}

export default SearchStopReducer;