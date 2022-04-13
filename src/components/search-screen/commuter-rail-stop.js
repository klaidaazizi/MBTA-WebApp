import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import './search.css';
import PredictionListItem from "./prediction-list-item";
import {getPredicationByStopIdOneDirection, getPredicationByStopIdZeroDirection} from "../../actions/prediction-action";
import {findRapidTransitRouteDestinationDirections} from "../../actions/search-action";


const CommuterRailStop = () => {
    const [zeroDirectionPredictions, setZeroDirectionPredictions] = useState([]);
    const [oneDirectionPredictions, setOneDirectionPredictions] = useState([]);
    const [destinationDirections, setDestinationDirections] = useState([]);
    const navigate = useNavigate();
    const params = useParams();
    const stopId = params.stopId;
    const routeId = params.routeId;
    const name = params.stopName;
    useEffect(() => {
        getPredicationByStopIdZeroDirection(stopId).then(response => setZeroDirectionPredictions(response));
        getPredicationByStopIdOneDirection(stopId).then(response => setOneDirectionPredictions(response));
        findRapidTransitRouteDestinationDirections(routeId).then(response => setDestinationDirections(response));
    }, [])

    return(
        <div>
            <li className='list-group-item cr-color'>
                <div className='row ' >
                    <div className="back-button-and-title-rt-route">
                        <button id="buttonBackToSearchMain" type="button" className=" button-sizing btn  -search-main-buttons-text"
                            onClick={() => navigate(-1)}>
                            Back
                        </button>
                        <span className="fw-bold commuter-rail-route-stop">{name}</span>
                        <div>
                            <i className="fa fa-star fa-3x"/>
                        </div>
                    </div>
                    <div>
                        <div className='row'>
                            <span className='rt-route-test-color'>To {destinationDirections[0]}</span>
                            <div className='list-group'>
                                {zeroDirectionPredictions.map(prediction => {return(
                                        <PredictionListItem prediction={prediction.attributes}/>)
                                    }
                                )}
                            </div>
                        </div>
                        <div className='row'>
                            <span className='rt-route-test-color'>To {destinationDirections[1]}</span>
                            <div className='list-group'>
                                {oneDirectionPredictions.map(prediction => {return(
                                        <PredictionListItem prediction={prediction.attributes}/>)
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
};

export default CommuterRailStop;