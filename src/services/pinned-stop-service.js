import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

export const pinStop = async (uid, routeId, stopId) => {
    console.log("hi galen")
    const response = await axios.post(`${API_BASE}/users/${uid}/pins/${routeId}/${stopId}`);
    console.log("hi galen2")
    return response.data;
};

export const findAllPinnedStopsByUser = async (uid) => {
    const response = await axios.get(`${API_BASE}/users/${uid}/pins`);
    return response.data;
}

export const unpinStop = async (pid) => {
    const response = await axios.delete(`${API_BASE}/pins/${pid}`);
    return response.data;
};

export const findOnePinnedStopsByUser = async (pid) => {
    const response = await axios.get(`${API_BASE}/pins/${pid}`);
    return response.data;
}