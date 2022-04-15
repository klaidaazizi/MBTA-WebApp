import {FIND_ALERT_BY_ID} from "../actions/alerts-action";

const AlertScreenReducer = (state =
                               {attributes: {
                                   header: '',
                                   active_period: [
                                       {
                                           end: '',
                                           start: ''
                                       },
                                   ]
                               }
                               },
                           action) => {
    switch (action.type){
        case FIND_ALERT_BY_ID:
            return action.alert;
        default:
            return state;
    }
}

export default AlertScreenReducer;