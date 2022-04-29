import axios from "axios";
const MBTA_BASE_API = 'https://api-v3.mbta.com';
const STOPS_API = `${MBTA_BASE_API}/stops`
const API_KEY = 'api_key=eb89c32aa05e4d9ea677b5c29a789f90'

export const findStopNameById = async (stopId) => {
    const response = await axios.get(`${STOPS_API}/${stopId}?${API_KEY}`)
    const stop = response.data.data
    if (stop) {
        return stop.attributes.name
    } else {
        return null
    }
}
