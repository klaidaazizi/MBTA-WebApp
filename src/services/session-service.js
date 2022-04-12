import axios from "axios";
const API_BASE = 'http://localhost:4000/api' || process.env.REACT_APP_API_BASE;
const SECURITY_API = `${API_BASE}/auth`;

const api = axios.create({
    withCredentials: true
});

export const register = (user) =>
    api.post(`${SECURITY_API}/register`, user)
        .then(response => response.data);

export const login = (user) =>
    api.post(`${SECURITY_API}/login`, user)
        .then(response => response.data);

export const logout = (user) =>
    api.post(`${SECURITY_API}/logout`, user)
        .then(response => response.data);

export const isLoggedIn = () =>
    api.get(`${SECURITY_API}/user`)
        .then(response => response.data);

export const isOwner = () =>
    api.get(`${SECURITY_API}/profile`)
        .then(response => response.data);