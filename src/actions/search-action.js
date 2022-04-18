import * as service from '../services/search-service';

export const FIND_ALL_RAPID_TRANSIT_ROUTES = 'FIND_ALL_RAPID_TRANSIT_ROUTES';
export const FIND_ALL_COMMUTER_RAIL_ROUTES = 'FIND_ALL_COMMUTER_RAIL_ROUTES';
export const FIND_ALL_BUS_ROUTES = 'FIND_ALL_BUS_ROUTES';
export const FIND_ALL_FERRY_ROUTES = 'FIND_ALL_FERRY_ROUTES';
export const FIND_RAPID_TRANSIT_ROUTE_ALL_STOPS = 'FIND_RAPID_TRANSIT_ROUTE_ALL_STOPS';


export const findAllRapidTransitRoutes = async (dispatch) => {
    const rtRoutes = await service.findAllRapidTransitRoutes();
    dispatch({
        type: FIND_ALL_RAPID_TRANSIT_ROUTES,
        rtRoutes
    });
}

export const findAllCommuterRailRoutes = async (dispatch) => {
    const crRoutes = await service.findAllCommuterRailRoutes();
    dispatch({
        type: FIND_ALL_COMMUTER_RAIL_ROUTES,
        crRoutes
    });
}


export const findAllBusRoutes = async (dispatch) => {
    const busRoutes = await service.findAllBusRoutes();
    dispatch({
        type: FIND_ALL_BUS_ROUTES,
        busRoutes
    });
}

export const findAllFerryRoutes = async (dispatch) => {
    const ferryRoutes = await service.findAllFerryRoutes();
    dispatch({
        type: FIND_ALL_FERRY_ROUTES,
        ferryRoutes
    });
}

export const findRapidTransitRouteAllStops = async (dispatch, routeId) => {
    const rapidRouteStops = await service.findRapidTransitRouteAllStops(routeId);
    dispatch({
        type: FIND_RAPID_TRANSIT_ROUTE_ALL_STOPS,
        rapidRouteStops
    });
}

export const findRapidTransitRouteDestinationDirections = async (routeId) => {
    const destinationDirections = await service.findRapidTransitRouteDestinationDirections(routeId);
    return destinationDirections.data.attributes.direction_destinations;
}
