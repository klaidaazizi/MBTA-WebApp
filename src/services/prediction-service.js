import axios from "axios";
const PREDICTION_BASE_API = 'https://api-v3.mbta.com/predictions';
const API_KEY = 'api_key=eb89c32aa05e4d9ea677b5c29a789f90';
const PAGE_LIMIT_3 = 'page[limit]=3';
const PREDICTION_API = `${PREDICTION_BASE_API}?${API_KEY}&${PAGE_LIMIT_3}`
const ARRIVAL_TIME_SORT = 'sort=arrival_time'

export const getPredictionsByStopZeroDirection = async (stopId) => {
    const stopFilter = `filter[stop]=${stopId}`;
    const directionFilter = 'filter[direction_id]=0'
    const response = await axios.get(`${PREDICTION_API}&${stopFilter}&${directionFilter}&${ARRIVAL_TIME_SORT}`);
    return response.data.data;
}

export const getPredictionsByStopOneDirection = async (stopId) => {
    const stopFilter = `filter[stop]=${stopId}`;
    const directionFilter = 'filter[direction_id]=1'
    const response = await axios.get(`${PREDICTION_API}&${stopFilter}&${directionFilter}&${ARRIVAL_TIME_SORT}`);
    return response.data.data;
}