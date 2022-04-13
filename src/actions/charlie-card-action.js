export const ADD_MONEY = 'ADD_MONEY';
export const TAKE_RIDE = 'TAKE_RIDE';

export const addMoney = (dispatch, amount) => {
    dispatch({
        type: ADD_MONEY,
        amount
    })
}

export const takeRide = (dispatch) => {
    dispatch({
        type: TAKE_RIDE,
    })
}