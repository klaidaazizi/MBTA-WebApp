import * as service from '../services/pinned-stop-service';

export const FIND_ALL_PINNED_STOPS_BY_USER = 'FIND_ALL_PINNED_STOPS_BY_USER';
export const PIN_ALREADY_EXISTS = 'PIN_ALREADY_EXISTS';


export const findAllPinnedStopsByUser = async (dispatch, uid) => {
    const pinnedStops = await service.findAllPinnedStopsByUser(uid);
    console.log(pinnedStops)
    dispatch({
        type: FIND_ALL_PINNED_STOPS_BY_USER,
        pinnedStops
    });
}

export const pinnedStopAlreadyExists = async (dispatch, routeType, routeId, stopId, userId) => {
    const pinExists = await service.pinExistsAlready(routeType, routeId, stopId, userId);
    console.log("hi my guysssss")
    console.log(pinExists)
    dispatch({
        type: PIN_ALREADY_EXISTS,
        pinExists
    });
}