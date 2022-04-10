import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {findAlertById} from "../../actions/alerts-action";
import {useDispatch, useSelector} from "react-redux";

const AlertScreen = () => {
    const alert = useSelector(state => state.alertScreen)
    const params = useParams();
    const alertId = params.aid;
    const dispatch = useDispatch()
    useEffect(() => findAlertById(dispatch, alertId),
        [])
    const startTime = new Date(alert.attributes.active_period[0].start).toDateString();
    let endTime;
    if (alert.attributes.active_period[0].end) {
        endTime = new Date(alert.attributes.active_period[0].end).toDateString();
    } else {
        endTime = 'TBD';
    }
    // findAlertById(dispatch, alertId)
    return(
        <>
            <h3>ALERT</h3>
            <h6>{alert.attributes.header}</h6>
            <h6>{startTime}</h6>
            <h6>{endTime}</h6>
        </>
    )
}
export default AlertScreen;