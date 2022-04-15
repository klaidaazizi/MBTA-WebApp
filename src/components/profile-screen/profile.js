import React, {useEffect, useState} from "react";
import * as service from '../../services/authentication-service';
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
   const logout = () => service.logout().then(() => navigate('/login'));
    useEffect(async () => {
        const user = await service.profile();
        setProfile(user);
    }, []);
    console.log(profile)

    return(
        <>
            <div className="row mt-3 ms-0">
                <h5 className="fw-bold">{profile.name}</h5>
                <h6 className="mt-0 text-muted"><b>Username</b>: @{profile.username}</h6>
                <h6 className="mt-1"><b>Email Address</b>: {profile.email}</h6>
                <h6 className='mt-1'><b>Role</b>: {profile.userRole}</h6>
                <h6 className='mt-1'><b>Saved routes</b>: </h6>

            </div>
            <button onClick={logout} className="mt-2 float-start btn btn-warning rounded-pill">
                Logout
            </button>
        </>
    );
}

export default Profile;