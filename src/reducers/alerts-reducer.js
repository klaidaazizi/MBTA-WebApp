import alerts from '../data/alerts.json'
import {FIND_ALL_ALERTS} from "../actions/alerts-action";

const AlertsReducer = (state = alerts, action) => {
    switch (action.type){
        case FIND_ALL_ALERTS:
            return action.alerts;
        default:
            return state;
    }
}

export default AlertsReducer;