import * as service from '../services/pinned-stop-service';


export const FIND_ALL_PINNED_STOPS_BY_USER = 'FIND_ALL_PINNED_STOPS_BY_USER';
export const FIND_ALL_USERS_WHO_PINNED_STOP = 'FIND_ALL_USERS_WHO_PINNED_STOP';
export const PIN_ALREADY_EXISTS = 'PIN_ALREADY_EXISTS';


export const findAllPinnedStopsByUser = async (dispatch, uid) => {
    const pinnedStops = await service.findAllPinnedStopsByUser(uid);
    dispatch({
        type: FIND_ALL_PINNED_STOPS_BY_USER,
        pinnedStops
    });
}

export const findAllUsersWhoPinnedStop = async (dispatch, sid) => {
    //console.log(sid, " in pinned-action")
    const usersWhoPinnedStops = await service.findAllUsersWhoPinnedStop(sid);
    //console.log(usersWhoPinnedStops, " in pinned-action")

    dispatch({
        type: FIND_ALL_USERS_WHO_PINNED_STOP,
        usersWhoPinnedStops
    });
}

export const pinnedStopAlreadyExists = async (dispatch, routeType, routeId, stopId, userId) => {
    const pinExists = await service.pinExistsAlready(routeType, routeId, stopId, userId);
    //console.log(pinExists, routeType, routeId, stopId, userId)
    dispatch({
        type: PIN_ALREADY_EXISTS,
        pinExists
    });
}