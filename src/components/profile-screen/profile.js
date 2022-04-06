import React from "react";

const Profile = ({profile}) => {
    return(
        <>
            <li className='list-group-item border-1'>
            <div className="row mt-3 ms-0">
                <h5 className="fw-bold">{profile.firstName} {profile.lastName}</h5>
                <h6 className="mt-0 text-muted"><b>Username</b>: @{profile.username}</h6>
                <h6 className="mt-1"><b>Email Address</b>: {profile.email}</h6>
                <h6 className='mt-1'><b>Role</b>: {profile.role}</h6>
                <h6 className='mt-1'><b>Saved routes</b>: </h6>
            </div>
            </li>
        </>
    );
}

export default Profile;