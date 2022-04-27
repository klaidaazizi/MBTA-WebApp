import React, {useEffect, useState} from "react";
import * as service from '../../services/authentication-service';
import {Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import './index.css';
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {deleteProfile, save} from "../../actions/auth-actions";
import {deleteUser} from "../../actions/user-actions";

const EditProfile = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.sessionReducer.profileData)
    const loggedIn = useSelector(state=> state.sessionReducer.isLoggedIn)
    const dispatch = useDispatch();
    const [profile, setProfile] = useState({});

    useEffect(  () => {
        {loggedIn ? setProfile(user): alert("Please log in to edit profile!");
    }}, []);

    const saveProfile = () => {
        try {
            save(dispatch, profile).then(r => navigate(`/profile`));
        } catch (e){
            alert("Failed to update!")
        }
    }

    const updateName = (event) => setProfile({
        ...profile,
        name: event.target.value
    });
    const updateUsername = (event) => setProfile({
        ...profile,
        username: event.target.value
    });
    const updateEmail = (event) => setProfile({
        ...profile,
        email: event.target.value
    });
    const updatePassword = (event) => setProfile({
        ...profile,
        password: event.target.value
    });

    const updateHomeStop = (event) => setProfile({
        ...profile,
        homeStop: event.target.value
    });

    const updateDOB = (event) => setProfile({
        ...profile,
        dateOfBirth: event.target.value
    });

    const updateJoinedDate= (event) => setProfile({
        ...profile,
        dateJoined: event.target.value
    });

    const updateJobTitle= (event) => setProfile({
        ...profile,
        jobTitle: event.target.value
    });

    const updateCharlieCardBalance = (event) => setProfile({
        ...profile,
        charlieCardBalance: event.target.value
    });


    const deleteAccount = () => {
        deleteProfile(dispatch, profile._id).then(()=>navigate('/login'));
    }

    return(
        <>
            <div className="row ">
                <div className="col-2"> <Button onClick={()=> navigate(-1)} className={"fa fa-arrow-left btn-dark mt-1"}/> </div>
                <div className="col-8">
                    <h5 className="fw-bold">Edit Profile</h5>
                </div>
            </div><div className='border border-black bg-light rounded-2 ps-2 pe-2'>
            <div className="row border-bottom bg-black border-2 rounded-3 pt-3 p-1">

            </div>

            <div className="position-relative border-bottom">
                <img src='/images/train.png' alt='' className="banner"/>
            </div>
            <img src='/images/thomas.png' alt='' className="profile-pic"/>


            <div className="row ms-2 mt-3 col-11 mb-2">
                <label className='control-label'>
                    Edit Name
                </label>
                <input className="border-1 form-control" value={profile.name} onChange={updateName}/>
                <label className='control-label mt-2'>
                    Edit Username
                </label>
                <input className="border-1 form-control" value={profile.username} onChange={updateUsername}/>
                <label className='control-label mt-2'>
                    Edit Email
                </label>
                <input className="border-1 form-control" value={profile.email} onChange={updateEmail}/>
                <label className='control-label mt-2'>
                    Edit Password
                </label>
                <input className="border-1 form-control" value={profile.password} onChange={updatePassword}/>

                {profile.userRole === "Commuter" ?
                    <>
                        <label className='control-label mt-2'>
                            Edit Home stop
                        </label>
                        <input className="border-1 form-control" value={profile.homeStop} onChange={updateHomeStop}/>
                    </>
                    : ""
                }

                <label className='control-label mt-2 '>
                    Edit Date of Birth
                </label>
                <input className="border-1 form-control" type="date" value={profile.dateOfBirth} onChange={updateDOB}/>
                <label className='control-label mt-2 '>
                    Edit Joined Date
                </label>
                <input className="border-1 form-control" type='date' value={profile.dateJoined} onChange={updateJoinedDate}/>

                {profile.userRole === "Commuter" ?
                    <>
                    <label className='control-label mt-2 '>
                        Edit CharlieCard Balance
                    </label>
                    <input type='number' className="border-1 form-control" value={profile.charlieCardBalance}
                           onChange={updateCharlieCardBalance}/>
                    </>
                    :
                    ""
                }
                {profile.userRole === "Admin" ?
                    <>
                    <label className='control-label mt-2'>
                        Edit Job Title
                    </label>
                    <input className="border-1 form-control" value={profile.jobTitle} onChange={updateJobTitle}/>
                    </>
                    : ""
                }

            </div>
            <div className='row ms-2 me-2 mt-3'>
                <Button  className="col-5 btn-primary mb-1 ms-3 me-3" onClick={()=>saveProfile()}>
                    Save
                </Button>
                <Button  className="col-5 btn-danger mb-1" onClick={()=> deleteAccount()}>
                    Delete Account
                </Button>
            </div>

        </div>


        </>


    );
}

export default EditProfile;