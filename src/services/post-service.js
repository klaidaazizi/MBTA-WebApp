import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const POST_API = `${API_BASE}/posts`;

export const api = axios.create({withCredentials: true});

export const findAllPosts = async () => {
    const response = await axios.get(POST_API);
    return response.data;
};

export const findAllPostsByUser = async (uid) => {
    const response = await api.get(`${API_BASE}/users/${uid}/posts`);
    return response.data;
};

export const userPostsAPost = async (uid, post) => {
    const response = await api.post(`${API_BASE}/users/${uid}/posts`, post);
    return response.data;
}

export const findPostsById = async (pid) => {
    const response = await axios.get(`${POST_API}/${pid}`);
    return response.data;
}

export const userUpdatesAPost = async (pid, post) => {
    const response = await axios.put(`${POST_API}/${pid}`, post);
    return response.data;
}

export const updateStats = async (pid, stats) => {
    const response = await axios.put(`${POST_API}/${pid}`, stats);
    return response.data;
}

export const userDeletesAPost = async (pid) => {
    const response = await axios.delete(`${POST_API}/${pid}`);
    return response.data;
}