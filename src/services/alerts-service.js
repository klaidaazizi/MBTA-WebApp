import axios from "axios";
const MBTA_BASE_API = 'https://api-v3.mbta.com';
const ALERTS_API = `${MBTA_BASE_API}/alerts`
const API_KEY = 'api_key=eb89c32aa05e4d9ea677b5c29a789f90'
const PAGE_LIMIT_6 = 'page[limit]=6';
const ONGOING = 'filter[lifecycle]=ONGOING'

export const findAllAlerts = async () => {
    const response = await axios.get(`${ALERTS_API}?${API_KEY}&${PAGE_LIMIT_6}&${ONGOING}`)
    return response.data.data;
}

export const findAlertsByRoute = async (routeId) => {
    const route_filter = 'filter[route]=' + routeId;
    const response = await axios.get(`${ALERTS_API}?${API_KEY}&${PAGE_LIMIT_6}&${route_filter}`)
    return response.data.data;
}

export const findAlertsByStop = async (stopId) => {
    const stop_filter = 'filter[stop]=' + stopId;
    const response = await axios.get(`${ALERTS_API}?${API_KEY}&${PAGE_LIMIT_6}&${stop_filter}`)
    return response.data.data;
}