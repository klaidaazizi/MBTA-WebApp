import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

export const api = axios.create({withCredentials: true});

// export const pinStop = async (uid, routeId, stopId) => {
//     const response = await axios.post(`${API_BASE}/users/${uid}/pins/${routeId}/${stopId}`);
//     return response.data;
// };

export const pinStop = async (uid, routeId, stopId) =>
    api.post(`${API_BASE}/users/${uid}/pins/${routeId}/${stopId}`).then(response => response.data);


export const findAllPinnedStopsByUser = (uid) =>
    api.get(`${API_BASE}/users/${uid}/pins`).then(response => response.data);

// export const findAllPinnedStopsByUser = async (uid) => {
//     const response = await axios.get(`${API_BASE}/users/${uid}/pins`);
//     return response.data;
// }

export const unpinStop = async (pid) => {
    const response = await axios.delete(`${API_BASE}/pins/${pid}`);
    return response.data;
};

export const findOnePinnedStopsByUser = async (pid) => {
    const response = await axios.get(`${API_BASE}/pins/${pid}`);
    return response.data;
}