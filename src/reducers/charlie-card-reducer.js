import {ADD_MONEY, TAKE_RIDE} from "../actions/charlie-card-action";

const CharlieCardReducer = (state = {
                                        balance: 10
                                        },
                            action) => {
    switch (action.type){
        case TAKE_RIDE:
            state = {
                balance: state.balance - 2.50
            }
            return state;
        case ADD_MONEY:
            state = {
                balance: state.balance + action.amount
            }
            return state;
        default:
            return state;
    }
}

export default CharlieCardReducer;