import * as service from "../services/prediction-service.js";

export const getPredicationByStopIdZeroDirection = (stopId) => {
    const response = service.getPredictionsByStopZeroDirection(stopId);
    return response;
}

export const getPredicationByStopIdOneDirection = (stopId) => {
    const response = service.getPredictionsByStopOneDirection(stopId);
    return response;
}