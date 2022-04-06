import Profile from './profile';
import profiles from "../../data/users.json";
import React from "react";

const ProfileScreen =() => {
    return(
        <ul className='list-group'>
            <li className='list-group-item fw-bold text-danger'>Users</li>
            {profiles.map(
                profile => {
                    return(<Profile profile={profile}/>)
                }
            )}
        </ul>
    );
};
export default ProfileScreen;