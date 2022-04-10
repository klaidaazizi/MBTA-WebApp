import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const ALERTS_API = `${API_BASE}/alerts`

export const findAllAlerts = async () => {
    const response = await axios.get(ALERTS_API)
    return response.data
}

export const findAlertById = async (alertId) => {
    const response = await axios.get(`${ALERTS_API}/${alertId}`)
    return response.data
}