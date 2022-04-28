import {
    FIND_STOP_BY_ID
} from "../actions/search-action";

const SingleStopReducer = (state = {}, action) => {
    switch (action.type){
        case FIND_STOP_BY_ID:
            return action.singleStop;
        default:
            return state;
    }
}

export default SingleStopReducer;