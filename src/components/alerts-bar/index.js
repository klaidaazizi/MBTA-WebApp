import React, {useEffect} from "react";
import AlertItem from "./alert-item";
import {useDispatch, useSelector} from "react-redux";
import {findAllAlerts} from "../../actions/alerts-action";

const AlertsBar = () => {
    const alerts = useSelector(state => state.alerts);
    const dispatch = useDispatch();

    useEffect(()=> findAllAlerts(dispatch),
        []);

    return(
        <ul className='list-group'>
            <li className='list-group-item fw-bold text-danger'>Alerts</li>
            {alerts.map(
                alert => {
                    return(<AlertItem key={alert.id}
                                      alert={alert}/>)
                }
            )}
        </ul>
    )
};

export default AlertsBar;