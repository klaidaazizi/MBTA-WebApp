import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

export const api = axios.create(
    {withCredentials: true}
);

export const followUser = async (uid, uid2) =>
    api.post(`${API_BASE}/users/${uid}/follows/${uid2}`).then(response => response.data);

export const unfollowUser = async (fid) => {
    const response = await axios.delete(`${API_BASE}/follows/${fid}`);
    return response.data;
}
export const findAllFollowsByUser = (uid) =>
    api.get(`${API_BASE}/users/${uid}/follows`).then(response => response.data);

export const findAllUserFollowers = (uid) =>
    api.get(`${API_BASE}/users/${uid}/followers`).then(response => response.data);

export const followExistsAlready = (uid, uid2) =>
    api.get(`${API_BASE}/follows/${uid}/${uid2}`).then(response => response.data);

export const findFollowbyId = async (fid) => {
    const response = await axios.get(`${API_BASE}/follows/${fid}`);
    return response.data;
}