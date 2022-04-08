import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const ALERTS_API = `${API_BASE}/api/alerts`

export const findAllAlerts = async () => {
    const response = await axios.get(ALERTS_API)
    return response.data;
}

export const findAlertsByStopId = async (stopId) => {
    const response = await axios.get(`${ALERTS_API}/${stopId}`)
    return response.data
}