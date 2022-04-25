import * as service from '../services/alerts-service';

export const CHANGE_ALERTS = 'CHANGE_ALERTS';
export const CHANGE_ALERTS_TO_STATION = 'CHANGE_ALERTS_TO_STATION';

export const findAllAlerts = async (dispatch) => {
    const alerts = await service.findAllAlerts();
    dispatch({
        type: CHANGE_ALERTS,
        alerts
    })
}

export const findAlertsByRoute = async (dispatch, routeId) => {
    const alerts =  await service.findAlertsByRoute(routeId);
    dispatch({
        type: CHANGE_ALERTS,
        alerts
    })
}

export const findAlertsByStop = async (dispatch, stopId, stopName) => {
    const alerts = await service.findAlertsByStop(stopId);
    dispatch({
        type: CHANGE_ALERTS_TO_STATION,
        alerts: alerts,
        stopName: stopName
    })
}

export const findAlertsByHomeStop = async (dispatch, stopId) => {
    const alerts = await service.findAlertsByStop(stopId);
    dispatch({
        type: CHANGE_ALERTS,
        alerts: alerts,
    })
}


export default [findAllAlerts, findAlertsByRoute, findAlertsByStop, findAlertsByHomeStop];
