import * as service from '../services/alerts-service';

export const FIND_ALL_ALERTS = 'FIND_ALL_ALERTS';
export const FIND_ALERTS_BY_STOP_ID = 'FIND_ALERTS_BY_STOP_ID';

export const findAllAlerts = async (dispatch) => {
    const alerts = await service.findAllAlerts();
    dispatch({
        type: FIND_ALL_ALERTS,
        alerts
    });
}

export const findAlertsByStopId = async (dispatch, stopID) => {
    const alertsByStopId = await service.findAlertsByStopId(stopID);
    dispatch({
        type: FIND_ALERTS_BY_STOP_ID,
        alertsByStopId
    })
}
