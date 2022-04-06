import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

const api = axios.create({
    withCredentials: true
});

export const register = (user) =>
    api.post(`${API_BASE}/register`, user)
        .then(response => response.data);

export const login = (user) =>
    api.post(`${API_BASE}/login`, user)
        .then(response => response.data);

export const logout = (user) =>
    api.post(`${API_BASE}/logout`, user)
        .then(response => response.data);

export const profile = () =>
    api.post(`${API_BASE}/profile`)
        .then(response => response.data);