import axios from "axios";
const SEARCH_API_BASE = 'https://api-v3.mbta.com';

export const findAllRapidTransitRoutes = async () => {
    const response = await axios.get(`${SEARCH_API_BASE}/routes?filter[type]=0,1`)
    return response.data.data;
}

export const findRapidTransitRouteDestinationDirections = async (routeId) => {
    const response = await axios.get(`${SEARCH_API_BASE}/routes/${routeId}?fields[route]=direction_destinations`);
    return response.data;
}

export const findRapidTransitRouteAllStops = async (routeId) => {
    const response = await axios.get(`${SEARCH_API_BASE}/stops?filter[route]=${routeId}`)
    return response.data.data;
}

export const findAllCommuterRailRoutes = async () => {
    const response = await axios.get(`${SEARCH_API_BASE}/routes?filter[type]=2`)
    return response.data.data;
}

export const findAllBusRoutes = async () => {
    const response = await axios.get(`${SEARCH_API_BASE}/routes?filter[type]=3`)
    return response.data.data;
}

export const findAllFerryRoutes = async () => {
    const response = await axios.get(`${SEARCH_API_BASE}/routes?filter[type]=4`)
    return response.data.data;
}


export const findAllStopsInMBTA = async () => {
    const response = await axios.get(`${SEARCH_API_BASE}/stops`)
    console.log(response.data.data, " in service")
    return response.data.data;
}

export const findStopById = async (sid) => {
    console.log("in seeeervice")
    const response = await axios.get(`${SEARCH_API_BASE}/stops/${sid}`)
    console.log(response.data.data, " in stop id service")
    return response.data.data;
}
