import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import PredictionListItem from "../prediction-list-item";
import {getPredicationByStopIdOneDirection, getPredicationByStopIdZeroDirection} from "../../../actions/prediction-action";
import {findRapidTransitRouteDestinationDirections} from "../../../actions/search-action";

const TransitStop = () => {
    const [zeroDirectionPredictions, setZeroDirectionPredictions] = useState([]);
    const [oneDirectionPredictions, setOneDirectionPredictions] = useState([]);
    const [destinationDirections, setDestinationDirections] = useState([]);
    const navigate = useNavigate();
    const params = useParams();
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

    return(
        <div>
            <li className='list-group-item rt-route-color'>
                <div className='col-12' >
                    <div className='row'>
                        <span className='col-12'>
                            <span className="col-3 float-start btn btn-warning justify-content-center"
                                  onClick={() => navigate(-1)}>
                                Back
                            </span>
                            <span className="col-3 btn btn-dark float-end">
                                    Pin Stop
                            </span>
                        </span>
                    </div>
                    <div className='row mt-1'>
                        <span className="fw-bold text-primary h3 col justify-content-center d-flex">
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
            </li>
        </div>
    )
};

export default TransitStop;