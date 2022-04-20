import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

export const api = axios.create({withCredentials: true});

export const pinStop = async (routeType, uid, routeId, routeName, stopId, stopName) =>
    api.post(`${API_BASE}/users/${uid}/pins/${routeType}/${routeId}/${routeName}/${stopId}/${stopName}`).then(response => response.data);


export const findAllPinnedStopsByUser = (uid) =>
    api.get(`${API_BASE}/users/${uid}/pins`).then(response => response.data);


export const pinExistsAlready = (routeType, routeId, stopId, userId) =>
    api.get(`${API_BASE}/pins/${routeType}/${routeId}/${stopId}/${userId}`).then(response => response.data);


export const unpinStop = async (pid) => {
    const response = await axios.delete(`${API_BASE}/pins/${pid}`);
    return response.data;
};

export const findOnePinnedStopsByUser = async (pid) => {
    const response = await axios.get(`${API_BASE}/pins/${pid}`);
    return response.data;
}


