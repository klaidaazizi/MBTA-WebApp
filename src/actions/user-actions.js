import * as service from '../services/user-service';

export const CREATE_USER = 'CREATE_USER';
export const FIND_ALL_USERS = 'FIND_ALL_USERS';
export const FIND_USER_BY_USERNAME = 'FIND_USER_BY_USERNAME';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const createUser = async (dispatch, user) => {
    const newUser = await service.createUser(user);
    dispatch({
        type: CREATE_USER,
        newUser
    });
};

export const findAllUsers = async (dispatch) => {
    const users = await service.findAllUsers();
    dispatch({
        type: FIND_ALL_USERS,
        users
    });
};
export const findUserByUsername = async (dispatch, username) => {
    const response = await service.findUserByUsername(username);
    dispatch({
        type: FIND_USER_BY_USERNAME,
        response
    });
};

export const updateUser = async (dispatch, user) => {
    const status = await service.updateUser(user);
    dispatch({
        type: UPDATE_USER,
        status
    });

};
export const deleteUser = async (dispatch, user) => {
    const response = await service.deleteUser(user);
    dispatch({
        type: DELETE_USER,
        response
    });
};