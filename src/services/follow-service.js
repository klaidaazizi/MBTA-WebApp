import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

export const api = axios.create(
    {withCredentials: true}
);

export const followUser = async (uid, uid2) =>
    api.post(`${API_BASE}/users/${uid}/follows/${uid2}`).then(response => response.data);

export const unfollowUser = async (uid, uid2) =>
    api.delete(`${API_BASE}/users/${uid}/unfollows/${uid2}`).then(response => response.data);

export const findAllFollowsByUser = (uid) =>
    api.get(`${API_BASE}/users/${uid}/follows`).then(response => response.data);

export const findAllUserFollowers = (uid) =>
    api.get(`${API_BASE}/users/${uid}/followedBy`).then(response => response.data);

export const followExistsAlready = (routeType, routeId, stopId, userId) =>
    api.get(`${API_BASE}/pins/${routeType}/${routeId}/${stopId}/${userId}`).then(response => response.data);


export const findFollowbyId = async (uid) => {
    const response = await axios.get(`${API_BASE}/follows/${uid}`);
    return response.data;
}