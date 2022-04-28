import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const CONDUCTED_ROUTE_API = `${API_BASE}/conductedRoutes`;

export const findConductedRouteByUserId = async (uid) => {
    const response = await axios.get(`${CONDUCTED_ROUTE_API}/user/${uid}`);
    return response.data;
};

export const conductRoute = async (uid, route) => {
    const response = await axios.post(`${CONDUCTED_ROUTE_API}`, route);
    return response.data;
};