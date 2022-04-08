import alerts from '../data/alerts.json'
import {FIND_ALL_ALERTS, FIND_ALERTS_BY_STOP_ID} from "../actions/alerts-action";

const NavigationReducer = (state = alerts, action) => {
    switch (action.type){
        case FIND_ALL_ALERTS:
            return action.alerts;
        case FIND_ALERTS_BY_STOP_ID:
            return action.alerts;
        default:
            return state;
    }
}

export default NavigationReducer;