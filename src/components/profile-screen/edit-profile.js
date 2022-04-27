import React, {useEffect, useState} from "react";
import * as service from '../../services/authentication-service';
import {findUserByUsername} from '../../services/user-service';
import {Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import './index.css';
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {save, adminSave} from "../../actions/auth-actions";

const EditProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const user = useSelector(state => state.sessionReducer.profileData)
    const loggedIn = useSelector(state=> state.sessionReducer.isLoggedIn)
    const dispatch = useDispatch();
    const [profile, setProfile] = useState({});

    /**
     * Allow admin to edit user's profile, different edit profile page url
     * @type {string}
     */
    // const location = useLocation().pathname.split("/");
    // const stopId = newLocation[newLocation.length-2];
    // const stopName = newLocation[newLocation.length-1];

    const queryURL = window.location.pathname;
    const params = queryURL.toString().split('/');
    console.log(params)
    const username = params[params.length-1];
    // const username = params[-1].toString();
    console.log(username)

    // let publicUser = null;
    // if(username !== "editprofile"){
    //     publicUser = findUserByUsername(username);
    // }
    // console.log(publicUser)

    useEffect( async () => {
            {
                if(loggedIn && username !== "editprofile") {
                    const publicUser = await findUserByUsername(username);
                    setProfile(publicUser);
                }
                else{
                    setProfile(user);
                }
            }
        },
        [username]);



    // useEffect(  () => {
    //         {loggedIn && username === "editprofile" ? setProfile(user) : setProfile(publicUser)}
    //     },
    //     [loggedIn]);

    console.log(profile)



    // useEffect(  () => {
    //     {loggedIn ? setProfile(user) : navigate('/login')}
    // }, [loggedIn]);

    const saveProfile = () => {
        try {
            save(dispatch, profile).then(r => navigate(`/profile`));
            console.log(profile.charlieCardBalance);
        } catch (e){
            alert("Failed to update!")
        }
    }

    const adminSaveProfile = () => {
        try {
            adminSave(dispatch, profile).then(r => navigate(`/profile/${profile.username}`));
        } catch (e){
            alert("Admin failed to update!")
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
        joinedDate: event.target.value
    });

    const updateJobTitle= (event) => setProfile({
        ...profile,
        jobTitle: event.target.value
    });

    const updateCharlieCardBalance = (event) => setProfile({
        ...profile,
        charlieCardBalance: event.target.value
    });


    return(
        <>

            <div className="row ">
                <div className="col-2"> <Button onClick={()=> navigate(-1)} className={"fa fa-arrow-left btn-dark mt-1"}/> </div>
                <div className="col-8">
                    <h5 className="fw-bold">Edit Profile</h5>
                </div>
                {username === "editprofile" ?
                    <Button className="col-2 btn-primary rounded-pill mb-1 " onClick={() => saveProfile()}>
                        Save
                    </Button>
                    :
                    <Button className="col-2 btn-primary rounded-pill mb-1 " onClick={() => adminSaveProfile()}>
                        Save
                    </Button>
                }
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
                {loggedIn && profile && profile.name && profile.username && profile.email && profile.password ?
                    <>
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
                    </>
                    : ""
                }

                {profile && profile.userRole && profile.userRole === "Commuter" ?
                    <>
                        <label className='control-label mt-2'>
                            Edit Home stop
                        </label>
                        <input className="border-1 form-control" value={profile.homeStop} onChange={updateHomeStop}/>
                    </>
                    : ""
                }

                {profile ?
                    <>
                        <label className='control-label mt-2 '>
                            Edit Date of Birth
                        </label>
                        <input className="border-1 form-control" value={profile.dateOfBirth} onChange={updateDOB}/>
                        <label className='control-label mt-2 '>
                            Edit Joined Date
                        </label>
                        <input className="border-1 form-control" value={profile.dateJoined}
                               onChange={updateJoinedDate}/>
                    </>
                    : ""
                }

                {profile && profile.userRole && profile.userRole === "Commuter" ?
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
                {profile && profile.userRole && profile.userRole === "Admin" ?
                    <>
                    <label className='control-label mt-2'>
                        Edit Job Title
                    </label>
                    <input className="border-1 form-control" value={profile.jobTitle} onChange={updateJobTitle}/>
                    </>
                    : ""
                }


            </div>



        </div>


        </>


    );
}

export default EditProfile;