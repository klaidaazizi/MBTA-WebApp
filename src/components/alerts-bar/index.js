import React, {useEffect, useState} from "react";
import AlertItem from "./alert-item";
import {useDispatch, useSelector} from "react-redux";
import {findAllAlerts, findAlertsByRoute, findAlertsByHomeStop} from "../../actions/alerts-action";
import {Button} from "react-bootstrap";
import {findAllPinnedStopsByUser} from "../../actions/pinned-stops-action";
import {map} from "react-bootstrap/ElementChildren";

const AlertsBar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.sessionReducer.profileData);
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn);
    const stationSpecificAlerts = useSelector(state => state.alertsReducer.stationSpecific);
    const alerts = useSelector(state => state.alertsReducer.alerts);
    const stopName = useSelector(state => state.alertsReducer.stopName);

    let profileAlertKey;
    if (user && user.userRole === 'Commuter') {
        profileAlertKey = user.homeStop;
    } else if (user && user.userRole === 'Conductor') {
        profileAlertKey = user.currentRouteConducting;
    }

    useEffect(()=> {
            {loggedIn ?
                user.userRole === 'Admin' ?
                    findAllAlerts(dispatch) :
                    user.userRole === 'Commuter' ?
                        findAlertsByHomeStop(dispatch, profileAlertKey) :
                        findAlertsByRoute(dispatch, profileAlertKey)
                :
                findAllAlerts(dispatch)
            }
        },
        [loggedIn]);

    return(
        <ul className='list-group'>
            {stationSpecificAlerts ?
                <li className='list-group-item fw-bold bg-danger text-white text-center'>{stopName} Alerts</li> :
                loggedIn ?
                    user.userRole === 'Admin' ?
                        <li className='list-group-item fw-bold bg-danger text-white text-center'>Top Alerts</li> :
                        user.userRole === 'Commuter' ?
                            <li className='list-group-item fw-bold bg-danger text-white text-center'>Home Station Alerts</li> :
                            <li className='list-group-item fw-bold bg-danger text-white text-center'>Conducting Route Alerts</li>
                    :
                    <li className='list-group-item fw-bold bg-danger text-white text-center'>MBTA Alerts</li>
            }
            {alerts.map(
                alert => {
                    return(<AlertItem key={alert.id}
                                      alert={alert}/>)
                }
            )}
            {alerts.length === 0 ?
                <li className='list-group-item text-center'>
                    No Alerts
                </li> : ''}
            {stationSpecificAlerts ?
                <li className='list-group-item text-center'>
                    <Button className='btn btn-danger' onClick={() =>
                        {
                            loggedIn ?
                                user.userRole === 'Admin' ?
                                    findAllAlerts(dispatch) :
                                    user.userRole === 'Commuter' ?
                                        findAlertsByHomeStop(dispatch, profileAlertKey) :
                                        findAlertsByRoute(dispatch, profileAlertKey)
                                :
                                findAllAlerts(dispatch)
                        }
                    }>
                        Return to Default Alerts
                    </Button>
                </li>
                : ''
            }
        </ul>
    )

};

export default AlertsBar;