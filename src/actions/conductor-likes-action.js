import * as service from '../services/conductor-likes-service';

export const FIND_ALL_CONDUCTOR_LIKES = 'FIND_ALL_CONDUCTOR_LIKES';
export const FIND_ALL_COMMUTER_LIKES = 'FIND_ALL_COMMUTER_LIKES';
export const CONDUCTOR_LIKE_ALREADY_EXISTS = 'CONDUCTOR_LIKE_ALREADY_EXISTS';


export const findAllConductorLikes = async (dispatch, conid) => {
    const conductorlikes = await service.findAllConductorLikes(conid);
    dispatch({
        type: FIND_ALL_CONDUCTOR_LIKES,
        conductorlikes
    });
}

export const findAllConductorLikesbyCommuter = async (dispatch, comid) => {
    const commuterLikes = await service.findAllConductorLikesbyCommuter(comid);
    dispatch({
        type: FIND_ALL_COMMUTER_LIKES,
        commuterLikes
    });
}

export const conductorLikeAlreadyExists = async (dispatch, conid, comid) => {
    const conductorLikeExists = await service.likeExistsAlready(conid, comid);
    //console.log(conductorLikeExists, "in action likes")
    dispatch({
        type: CONDUCTOR_LIKE_ALREADY_EXISTS,
        conductorLikeExists
    });
}