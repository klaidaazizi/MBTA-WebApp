import React from "react";
import {takeRide} from "../../../actions/auth-actions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const PredictionListItem = ({prediction}) => {
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn);
    const user = useSelector(state => state.sessionReducer.profileData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    else if(timeToArrival < 0) {
        predictionDisplay = 'Left Station';
    }
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
            <span className='btn btn-primary float-end' onClick={
                loggedIn ?
                    () => takeRide(dispatch, user).catch(e => alert(e)):
                    () => navigate('/login')
            }>
                Take Ride
            </span>
        </div>
    )
}

export default PredictionListItem;