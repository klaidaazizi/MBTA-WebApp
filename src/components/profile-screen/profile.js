import React, {useEffect} from "react";
import * as action from '../../actions/auth-actions';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Profile = () => {
    const profile = useSelector(state => state.sessionReducer.message)

    return(
        <>
            <div className="row mt-3 ms-0">
                <h5 className="fw-bold">{profile.name}</h5>
                <h6 className="mt-0 text-muted"><b>Username</b>: @{profile.username}</h6>
                <h6 className="mt-1"><b>Email Address</b>: {profile.email}</h6>
                <h6 className='mt-1'><b>Role</b>: {profile.userRole}</h6>
                <h6 className='mt-1'><b>Saved routes</b>: </h6>
            </div>
        </>
    );
}

export default Profile;