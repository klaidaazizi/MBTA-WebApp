import React, {useEffect, useState} from "react";
import AlertItem from "./alert-item";
import {useDispatch, useSelector} from "react-redux";
import {findAllAlerts, findAlertsByRoute, findAlertsByHomeStop} from "../../actions/alerts-action";
import {Button} from "react-bootstrap";
import {findConductedRouteByUserId} from "../../actions/conducted-routes-action";

const AlertsBar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.sessionReducer.profileData);
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn);
    const stationSpecificAlerts = useSelector(state => state.alertsReducer.stationSpecific);
    const alerts = useSelector(state => state.alertsReducer.alerts);
    const stopName = useSelector(state => state.alertsReducer.stopName);
    const conductedRoute = useSelector(state=> state.conductedRoute)
    let profileAlertKey;

    useEffect(async () => {
            if (user && user.userRole === 'Commuter') {
                profileAlertKey = user.homeStop;
            } else if (user && user.userRole === 'Conductor') {
                profileAlertKey = conductedRoute.routeString.split('/').at(3);
            }
            {
                loggedIn ?
                    user.userRole === 'Admin' ?
                        findAllAlerts(dispatch) :
                        user.userRole === 'Commuter' ?
                            findAlertsByHomeStop(dispatch, user.homeStop) :
                            findAlertsByRoute(dispatch, profileAlertKey)
                    :
                    findAllAlerts(dispatch)
            }
        },
        [loggedIn, user, conductedRoute]);

    let conductingRoute
    if (user && user.userRole === 'Conductor') {
        conductingRoute = conductedRoute.routeString.split('/').at(3)
    }

    return(
        <ul className='list-group d-none d-lg-block'>
            {stationSpecificAlerts ?
                <li className='list-group-item fw-bold bg-danger text-white text-center'>{stopName} Alerts</li> :
                loggedIn ?
                    user.userRole === 'Admin' ?
                        <li className='list-group-item fw-bold bg-danger text-white text-center'>Top Alerts</li> :
                        user.userRole === 'Commuter' ?
                            <li className='list-group-item fw-bold bg-danger text-white text-center'>Home Station Alerts</li>
                            :
                            <>
                                <li className='list-group-item fw-bold bg-danger text-white text-center'>Conducting Route Alerts</li>
                                <li className='list-group-item fw-bold bg-warning text-white text-center'>Your Route: <br/> {conductingRoute}</li>
                            </>
                            // <li className='list-group-item fw-bold bg-danger text-white text-center'>Home Station Alerts</li> :
                            // <li className='list-group-item fw-bold bg-danger text-white text-center'>Conducting Route Alerts</li>
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
                                        findAlertsByHomeStop(dispatch, user.homeStop) :
                                        findAlertsByRoute(dispatch, conductingRoute)
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