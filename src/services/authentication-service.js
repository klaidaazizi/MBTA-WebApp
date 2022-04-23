import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const SECURITY_API = `${API_BASE}/auth`;

const api = axios.create({
    withCredentials: true
});

export const register = (user) =>
    api.post(`${SECURITY_API}/register`, user)
        .then(response => response.data);

export const login = (credentials) =>
    api.post(`${SECURITY_API}/login`, credentials)
        .then(response => response.data);

export const logout = (user) =>
    api.post(`${SECURITY_API}/logout`, user)
        .then(response => response.data);


export const profile = () =>
    api.post(`${SECURITY_API}/profile`)
        .then(response => response.data);

export const reset = (user) =>
    api.post(`${SECURITY_API}/reset`, user)
        .then(response => response.data);