import React, {useEffect, useState} from "react";
import * as service from '../../services/user-service';

const Profile = () => {
    const [profile, setProfile] = useState({});
    useEffect(async () => {
        const user = await service.profile();
        setProfile(user);
    }, []);

    return(
        <>
            <div className="row mt-3 ms-0">
                <h5 className="fw-bold">{profile.name}</h5>
                <h6 className="mt-0 text-muted"><b>Username</b>: @{profile.username}</h6>
                <h6 className="mt-1"><b>Email Address</b>: {profile.email}</h6>
                <h6 className='mt-1'><b>Role</b>: {profile.role}</h6>
                <h6 className='mt-1'><b>Saved routes</b>: </h6>
            </div>
        </>
    );
}

export default Profile;