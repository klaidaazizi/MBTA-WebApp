import React from "react";
import {Button} from "react-bootstrap";
import {takeRide} from "../../../actions/auth-actions";
import {useDispatch, useSelector} from "react-redux";

const PredictionListItem = ({prediction}) => {
    const user = useSelector(state => state.sessionReducer.profileData);
    console.log(user)
    const dispatch = useDispatch();
    const currentTime = new Date();
    let trainTime;
    if (prediction.arrival_time !== null) {
        trainTime = new Date(prediction.arrival_time);
    } else {
        trainTime = new Date(prediction.departure_time);
    }
    let timeToArrival = Math.floor(((trainTime.getTime() - currentTime.getTime()) / 1000));
    let predictionDisplay;
    if(prediction.status) {
        predictionDisplay = prediction.status;
    }
    else if(prediction.schedule_relationship){
        predictionDisplay = prediction.schedule_relationship;
    }
    else if(timeToArrival < 0) {
        predictionDisplay = 'Left Station';
    }
    // else if(timeToArrival < 90 && vehicle.status === 'STOPPED_AT') {
    //     predictionDisplay = 'BRD';
    // }
    else if(timeToArrival <= 30) {
        predictionDisplay = 'ARR';
    }
    else if(timeToArrival <= 60) {
        predictionDisplay = '1 min';
    }
    else {
        timeToArrival = Math.floor(timeToArrival / 60);
        if (timeToArrival > 20) {
            predictionDisplay = '20+ min';
        } else {
            predictionDisplay = timeToArrival + ' min'
        }
    }
    return(
        <div className='list-group-item'>
            <span className='text-dark'>{predictionDisplay}</span>
            <span className='btn btn-primary float-end' onClick={() => takeRide(dispatch, user).catch(e => alert(e))}>
                Take Ride
            </span>
        </div>
    )
}

export default PredictionListItem;