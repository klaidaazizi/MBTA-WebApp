import {
    FIND_STOP_BY_ID
} from "../actions/search-action";

const SingleStopReducer = (state = {}, action) => {
    switch (action.type){
        case FIND_STOP_BY_ID:
            console.log(action.singleStop, "stop in reducer")
            return action.singleStop;
        default:
            console.log("default in single stop reducer")
            return state;
    }
}

export default SingleStopReducer;
