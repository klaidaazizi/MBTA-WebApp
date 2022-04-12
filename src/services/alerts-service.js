import axios from "axios";
const MBTA_BASE_API = 'https://api-v3.mbta.com';
const ALERTS_API = `${MBTA_BASE_API}/alerts`
const API_KEY = 'api_key=eb89c32aa05e4d9ea677b5c29a789f90'
const PAGE_LIMIT_10 = 'page[limit]=10';
const ONGOING = 'filter[lifecycle]=ONGOING'

export const findAllAlerts = async () => {
    const response = await axios.get(`${ALERTS_API}?${API_KEY}&${PAGE_LIMIT_10}&${ONGOING}`)
    console.log(response)
    return response.data.data;
}