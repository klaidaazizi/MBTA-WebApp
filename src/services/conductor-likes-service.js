import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

export const api = axios.create({withCredentials: true});


export const likeConductor = async (comid, conid) => {
    const response = await api.post(`${API_BASE}/commuters/${comid}/conductorlikes/${conid}`);
    return response.data;
};

export const findAllConductorLikes = async (conid) => {
    const response = await api.get(`${API_BASE}/conductors/${conid}/conductorlikes`);
    return response.data;
}
export const findAllConductorLikesbyCommuter = async (comid) => {
    //console.log("in here now 22")
    const response = await api.get(`${API_BASE}/commuters/${comid}/conductorlikes`);
    return response.data;
}

export const unlikeConductor = async (cid) => {
    const response = await axios.delete(`${API_BASE}/conductorlikes/${cid}`);
    return response.data;
};

export const likeExistsAlready = async (conid, comid) => {
        //console.log(conid, comid, "in like service")
    const response = await api.get(`${API_BASE}/commuters/${comid}/conductorlikes/${conid}`);
    return response.data;

    // api.get(`${API_BASE}/commuters/${comid}/conductorlikes/${conid}`).then(response => response.data);

};
        // .then(response => response.data);
    // console.log(response, "in like service")
    // return response.data;