import {FIND_ALL_RAPID_TRANSIT_ROUTES, FIND_ALL_COMMUTER_RAIL_ROUTES,
    FIND_ALL_BUS_ROUTES, FIND_ALL_FERRY_ROUTES, FIND_RAPID_TRANSIT_ROUTE_ALL_STOPS} from "../actions/search-action";

const SearchReducer = (state = [], action) => {
    switch (action.type){
        case FIND_ALL_RAPID_TRANSIT_ROUTES:
            console.log("why not in herrrreee")
            return action.rtRoutes;
        case FIND_ALL_COMMUTER_RAIL_ROUTES:
            console.log("why not in herrrreee")
            return action.crRoutes;
        case FIND_ALL_BUS_ROUTES:
            return action.busRoutes;
        case FIND_ALL_FERRY_ROUTES:
            return action.ferryRoutes;
        // case FIND_RAPID_TRANSIT_ROUTE_ALL_STOPS:
        //     console.log("in herrrreee")
        //     return action.rapidRouteStops;
        default:
            console.log("returned default")
            return state;
    }
}

export default SearchReducer;