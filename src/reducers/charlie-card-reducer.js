import {ADD_MONEY, TAKE_RIDE} from "../actions/charlie-card-action";

const CharlieCardReducer = (state = {
                                        balance: 10
                                        },
                            action) => {
    switch (action.type){
        case TAKE_RIDE:
            const newBalance = state.balance - 2.50
            if(newBalance >= 0) {
                return {
                    balance: newBalance
                }
            } else {
                throw RangeError("You do not have enough money on your Charlie Card. Please add more money " +
                    "in order to take this ride.")
            }
        case ADD_MONEY:
            return {
                balance: state.balance + action.amount
            }
        default:
            return state;
    }
}

export default CharlieCardReducer;