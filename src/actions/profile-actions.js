import * as service from "../services/profile-service";

export const FIND_PROFILE = 'FIND_PROFILE';

export const profile = async (dispatch) => {
    const profile = await service.profile();
    dispatch({
        type: FIND_PROFILE,
        profile
    });
};