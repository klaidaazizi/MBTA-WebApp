import {CHANGE_ALERTS, CHANGE_ALERTS_TO_STATION} from "../actions/alerts-action";

const AlertsReducer = (state = {
    stationSpecific: false,
    alerts: [],
    stopName: ''
}, action) => {
    switch (action.type){
        case CHANGE_ALERTS:
            return {
                stationSpecific: false,
                alerts: action.alerts,
                stopName: ''
            }
        case CHANGE_ALERTS_TO_STATION:
            return {
                stationSpecific: true,
                alerts: action.alerts,
                stopName: action.stopName
            }
        default:
            return state;
    }
}

export default AlertsReducer;