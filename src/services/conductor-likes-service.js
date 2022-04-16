import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

export const likeConductor = async (comId, conId) => {
    console.log("hi galen")
    const response = await axios.post(`${API_BASE}/users/${comId}/conductorlikes/${conId}`);
    console.log("hi galen2")
    return response.data;
};

export const findAllConductorLikes = async (cid) => {
    const response = await axios.get(`${API_BASE}/users/${cid}/conductorlikes`);
    return response.data;
}
export const findAllConductorLikesbyCommuter = async (uid) => {
    const response = await axios.get(`${API_BASE}/users/${uid}/conductorlikes`);
    return response.data;
}

export const unlikeConductor = async (cid) => {
    const response = await axios.delete(`${API_BASE}/conductorlikes/${cid}`);
    return response.data;
};