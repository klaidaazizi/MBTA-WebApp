import * as service from '../services/follow-service';


export const FIND_ALL_USER_FOLLOWERS = 'FIND_ALL_USER_FOLLOWERS';
export const FIND_ALL_FOLLOWS_BY_USER = 'FIND_ALL_FOLLOWS_BY_USER';
export const FOLLOW_ALREADY_EXISTS = 'FOLLOW_ALREADY_EXISTS';


export const findAllUserFollowers = async (dispatch, uid) => {
    const followers = await service.findAllUserFollowers(uid);
    dispatch({
        type: FIND_ALL_USER_FOLLOWERS,
        followers
    });
}

export const findAllFollowsByUser = async (dispatch, uid) => {
    const following = await service.findAllFollowsByUser(uid);
    dispatch({
        type: FIND_ALL_FOLLOWS_BY_USER,
        following
    });
}

export const followAlreadyExists = async (dispatch, uid, uid2) => {
    const followExists = await service.followExistsAlready(uid,uid2);
    dispatch({
        type: FOLLOW_ALREADY_EXISTS,
        followExists
    });
}