import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import PredictionListItem from "../prediction-list-item";
import {getPredicationByStopIdOneDirection, getPredicationByStopIdZeroDirection} from "../../../actions/prediction-action";
import {findRapidTransitRouteDestinationDirections} from "../../../actions/search-action";
import {useDispatch} from "react-redux";
import {findAlertsByStop} from "../../../actions/alerts-action";
import {pinStop} from "../../../services/pinned-stop-service";
import CommuterRailRouteStopsItem from "../commuter-rail-route-stops-item";

const TransitStop = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [zeroDirectionPredictions, setZeroDirectionPredictions] = useState([]);
    const [oneDirectionPredictions, setOneDirectionPredictions] = useState([]);
    const [destinationDirections, setDestinationDirections] = useState([]);

    const transitType = params.transitType;
    const stopId = params.stopId;
    const routeId = params.routeId;
    const location = useLocation().pathname.split("/");
    const newLocation = location.filter(element => element != "");
    const stopName = newLocation[newLocation.length-1];
    const name = stopName.replace(/_/g," ").replace("*","/");

    useEffect(() => {
        getPredicationByStopIdZeroDirection(stopId).then(response => setZeroDirectionPredictions(response));
        getPredicationByStopIdOneDirection(stopId).then(response => setOneDirectionPredictions(response));
        findRapidTransitRouteDestinationDirections(routeId).then(response => setDestinationDirections(response));
    }, [])

    let backgroundColor;
    if(transitType === 'rapid-transit') {
        backgroundColor = 'rt-route-color';
    } else if (transitType === 'bus') {
        backgroundColor = 'bus-route-color';
    } else if (transitType === 'commuter-rail') {
        backgroundColor = 'cr-color';
    } else if (transitType === 'ferry') {
        backgroundColor = 'ferry-route-color';
    }

    return(


        <div>
            <ul className='list-group'>
                <li className="list-group-item">
                     <div className=' container'>
                                     <span className=' row text-center'>
                          <div className='col-4'>
                               <span className="col-12 btn btn-dark"
                                                   onClick={() => navigate(-1)}>
                                                 Back
                                             </span>
                                         </div>
                                         <div className='col-4'>
                                             <span className="col-12 btn bg-danger "
                                                   onClick={() => findAlertsByStop(dispatch, stopId, name)}>
                                                 Alerts
                                             </span>
                                         </div>
                                         <div className='col-4'>
                                             {/*<i onClick={() => pinStop("me", routeId, stopId)} className="col-12 fa fa-bookmark"></i>*/}
                                             <span onClick={() => pinStop("me", routeId, stopId)} className="col-12 btn btn-warning">
                                                 Pin Stop
                                             </span>
                                         </div>
                                     </span>
                     </div>
                </li>
                <li>

            <div className={`list-group-item ${backgroundColor}`}>
                <div className='col-12' >
                    <div className='row mt-1'>
                        <span className="fw-bold text-dark h3 col justify-content-center d-flex">
                            {name}
                        </span>
                    </div>
                    <div className='row mx-0 justify-content-center'>
                        <div className='row mx-0 my-1'>
                            <div className='list-group m-0 px-0'>
                                <li className='list-group-item fw-bold text-primary'>To {destinationDirections[0]}</li>
                                {zeroDirectionPredictions.map(prediction => {return(
                                        <PredictionListItem prediction={prediction.attributes}/>)
                                    }
                                )}
                            </div>
                        </div>
                        <div className='row mx-0 my-1'>
                            <div className='list-group m-0 px-0'>
                                <li className='list-group-item fw-bold text-primary'>To {destinationDirections[1]}</li>
                                {oneDirectionPredictions.map(prediction => {return(
                                        <PredictionListItem prediction={prediction.attributes}/>)
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </li>
            </ul>
        </div>
    )
};

export default TransitStop;