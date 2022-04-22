import React, {useEffect} from "react";
import AlertItem from "./alert-item";
import {useDispatch, useSelector} from "react-redux";
import {findAllAlerts, findAlertsByPinnedStops} from "../../actions/alerts-action";
import {Button} from "react-bootstrap";
import {findAllPinnedStopsByUser} from "../../actions/pinned-stops-action";

const AlertsBar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.sessionReducer.profileData);
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn);
    const pinnedStops = useSelector(state => state.pinnedStops);
    const stationSpecificAlerts = useSelector(state => state.alertsReducer.stationSpecific);
    const alerts = useSelector(state => state.alertsReducer.alerts);
    const stopName = useSelector(state => state.alertsReducer.stopName);
    console.log('Pinned stops: ', pinnedStops)
    useEffect(()=> {
            {loggedIn ?
                findAlertsByPinnedStops(dispatch, pinnedStops) :
                findAllAlerts(dispatch)
            }
        },
        [loggedIn]);

    return(
        <ul className='list-group'>
            {stationSpecificAlerts ?
                <li className='list-group-item fw-bold bg-danger text-white text-center'>{stopName} Alerts</li> :
                loggedIn ?
                    <li className='list-group-item fw-bold bg-danger text-white text-center'>Your Alerts</li> :
                    <li className='list-group-item fw-bold bg-danger text-white text-center'>Alerts</li>
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
                        {loggedIn ?
                            findAlertsByPinnedStops(dispatch, pinnedStops) :
                            findAllAlerts(dispatch)
                        }
                    }>
                        Return to Default Alerts
                    </Button>
                </li> :
                ''
            }
        </ul>
    )

};

export default AlertsBar;