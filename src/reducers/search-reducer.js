import {FIND_ALL_RAPID_TRANSIT_ROUTES, FIND_ALL_COMMUTER_RAIL_ROUTES,
    FIND_ALL_BUS_ROUTES, FIND_ALL_FERRY_ROUTES} from "../actions/search-action";

const SearchReducer = (state = [], action) => {
    switch (action.type){
        case FIND_ALL_RAPID_TRANSIT_ROUTES:
            return action.rtRoutes;
        case FIND_ALL_COMMUTER_RAIL_ROUTES:
            return action.crRoutes;
        case FIND_ALL_BUS_ROUTES:
            return action.busRoutes;
        case FIND_ALL_FERRY_ROUTES:
            return action.ferryRoutes;
        default:
            console.log("returned default")
            return state;
    }
}

export default SearchReducer;