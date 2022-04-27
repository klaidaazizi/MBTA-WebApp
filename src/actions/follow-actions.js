import * as service from '../services/follow-service';


export const FIND_ALL_USER_FOLLOWERS = 'FIND_ALL_USER_FOLLOWERS';
export const FIND_ALL_FOLLOWS_BY_USER = 'FIND_ALL_FOLLOWS_BY_USER';
export const FOLLOW_ALREADY_EXISTS = 'FOLLOW_ALREADY_EXISTS';


export const findAllUserFollowers = async (dispatch, uid) => {
    //console.log(uid, " in follow-action")
    const followers = await service.findAllUserFollowers(uid);
    //console.log(followers, " followers in follow-action")
    dispatch({
        type: FIND_ALL_USER_FOLLOWERS,
        followers
    });
}

export const findAllFollowsByUser = async (dispatch, uid) => {
    //console.log(uid, " in follow-action")
    const following = await service.findAllFollowsByUser(uid);
    //console.log(following, " following in follow-action")
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