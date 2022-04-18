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

export const findAlertsByPinnedStops = async (dispatch, pinnedStops) => {
    const alerts =  await service.findAlertsByPinnedStops(pinnedStops);
    dispatch({
        type: CHANGE_ALERTS,
        alerts
    })
}

export const findAlertsByStop = async (dispatch, stopId, stopName) => {
    const alerts = await service.findAlertsByPinnedStops(stopId);
    dispatch({
        type: CHANGE_ALERTS_TO_STATION,
        alerts: alerts,
        stopName: stopName
    })
}

export default [findAllAlerts, findAlertsByPinnedStops, findAlertsByStop];
