import React from "react";
import alerts from "../../data/alerts.json"
import AlertItem from "./alert-item";

const AlertsBar = () => {
    return(
        <ul className='list-group'>
            <li className='list-group-item fw-bold text-danger'>Alerts</li>
            {alerts.map(
                alert => {
                    return(<AlertItem alert={alert}/>)
                }
            )}
        </ul>
    )
};
export default AlertsBar;