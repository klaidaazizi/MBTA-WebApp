import * as service from '../services/session-service';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGGED_IN = 'LOGGED_IN';

export const register = async (dispatch, user) => {
    const response = await service.register(user);
    dispatch({
        type: REGISTER,
        response
    });
};

export const login = async (dispatch, user) => {
    const response = await service.login(user);
    dispatch({
        type: LOGIN,
        response
    });
};

export const loggedIn = async (dispatch) => {
    const response = await service.loggedIn();
    dispatch({
        type: LOGGED_IN,
        response
    });
};

export const logout = async (dispatch) => {
    const response = await service.logout();
    dispatch({
        type: LOGOUT,
        response
    });
};