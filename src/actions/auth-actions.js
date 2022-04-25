import * as authentication_service from '../services/authentication-service';
import * as user_service from '../services/user-service';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const UPDATE_CHARLIE_CARD_VALUE = 'UPDATE_CHARLIE_CARD_VALUE';


export const register = async (dispatch, user) => {
    const response = await authentication_service.register(user);
    dispatch({
        type: REGISTER,
        response,
    });
};

export const login = async (dispatch, user) => {
    const response = await authentication_service.login(user);
    dispatch({
        type: LOGIN,
        response,
    });
};

export const save = async (dispatch, user) => {
    const response = await authentication_service.reset(user);
    dispatch({
        type: SAVE_PROFILE,
        response,
    });
};

export const logout = async (dispatch) => {
    const response = await authentication_service.logout();
    dispatch({
        type: LOGOUT,
        response,
    });
};

export const addMoney = async (dispatch, amount, user) => {
    user.charlieCardBalance += amount;
    const response = await user_service.updateUser(user._id, user)
    if(response.acknowledged) {
        const updatedUser = await user_service.findUserById(user._id)
        dispatch({
            type: UPDATE_CHARLIE_CARD_VALUE,
            response: updatedUser,
        });
    }

}

export const takeRide = async (dispatch, user) => {
    if(user.charlieCardBalance - 2.5 < 0) {
        throw RangeError('Please add value to your Charlie Card before taking a ride.')
    } else {
        user.charlieCardBalance -= 2.5;
        const response = await user_service.updateUser(user._id, user)
        if(response.acknowledged) {
            const updatedUser = await user_service.findUserById(user._id)
            dispatch({
                type: UPDATE_CHARLIE_CARD_VALUE,
                response: updatedUser,
            });
        }
    }
}