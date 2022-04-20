import * as service from '../services/authentication-service';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVE_PROFILE = 'SAVE_PROFILE';


export const register = async (dispatch, user) => {
    const response = await service.register(user);
    console.log(response)
    dispatch({
        type: REGISTER,
        response,
        isLoggedIn: true
    });
};

export const login = async (dispatch, user) => {
    const response = await service.login(user);
    dispatch({
        type: LOGIN,
        response,
        isLoggedIn: true
    });
};

export const save = async (dispatch, user) => {
    const response = await service.reset(user);
    dispatch({
        type: SAVE_PROFILE,
        response,
        isLoggedIn: true
    });
};

export const logout = async (dispatch) => {
    const response = await service.logout();
    dispatch({
        type: LOGOUT,
        response,
        isLoggedIn: false
    });
};