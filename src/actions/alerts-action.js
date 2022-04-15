import * as service from '../services/alerts-service';

export const FIND_ALL_ALERTS = 'FIND_ALL_ALERTS';
export const FIND_ALERT_BY_ID = 'FIND_ALERT_BY_ID';

export const findAllAlerts = async (dispatch) => {
    const alerts = await service.findAllAlerts();
    dispatch({
        type: FIND_ALL_ALERTS,
        alerts
    });
}

export default [findAllAlerts];
