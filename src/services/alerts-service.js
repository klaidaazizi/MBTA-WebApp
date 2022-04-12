import axios from "axios";
const API_BASE = 'https://api-v3.mbta.com';
const ALERTS_API = `${API_BASE}/alerts`;
const API_KEY = 'api_key=eb89c32aa05e4d9ea677b5c29a789f90'
const PAGE_LIMIT_5 = 'page[limit]=5';
const FILTER_BANNER = 'filter[banner]=true'
const ONGOING = 'filter[lifecycle]=ONGOING'

export const findAllAlerts = async () =>{
    const api_response = await axios.get(`${API_BASE}/alerts?${API_KEY}&${PAGE_LIMIT_5}&${ONGOING}`);
    const api_response_string = api_response.data.data;
    return api_response_string;
}

// export const findAllAlerts = async () => {
//     const response = await axios.get(ALERTS_API)
//     return response.data;
// }

export const findAlertsByStopId = async (stopId) => {
    const response = await axios.get(`${ALERTS_API}/${stopId}`)
    return response.data
}

// import axios from "axios";
// const SEARCH_API_BASE = 'https://api-v3.mbta.com';
//
// export const findAllRapidTransitRoutes = async () => {
//     const response = await axios.get(`${SEARCH_API_BASE}/routes?filter[type]=0,1`)
//     console.log(response.data)
//     return response.data;
// }