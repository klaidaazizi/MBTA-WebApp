import * as service from '../services/pinned-stop-service';

export const FIND_ALL_PINNED_STOPS_BY_USER = 'FIND_ALL_PINNED_STOPS_BY_USER';


export const findAllPinnedStopsByUser = async (dispatch, uid) => {
    const pinnedStops = await service.findAllPinnedStopsByUser(uid);
    console.log(pinnedStops)
    dispatch({
        type: FIND_ALL_PINNED_STOPS_BY_USER,
        pinnedStops
    });
}