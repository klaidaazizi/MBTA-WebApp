import axios from 'axios';

const API_BASE = 'http://localhost:4000/api' || process.env.REACT_APP_API_BASE;
const PROFILE_API = `${API_BASE}/profile`;

const api = axios.create({
    withCredentials: true
});

export const profile = () =>
    api.post(`${PROFILE_API}`)
        .then(response => response.data);