import React from "react";

const PredictionListItem = ({prediction}) => {
    const currentTime = new Date();
    let trainTime;
    if (prediction.arrival_time) {
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
        <div className='container list-group-item'>
            {predictionDisplay}
        </div>
    )
}

export default PredictionListItem;