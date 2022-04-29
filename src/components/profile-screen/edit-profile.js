import React, {useEffect, useState} from "react";
import stations from '../../data/stations.json'
import {findUserByUsername} from '../../services/user-service';
import {useLocation, useNavigate} from "react-router-dom";
import './index.css';
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {save, adminSave} from "../../actions/auth-actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const EditProfile = () => {
    const navigate = useNavigate();

    const user = useSelector(state => state.sessionReducer.profileData)
    const loggedIn = useSelector(state=> state.sessionReducer.isLoggedIn)
    const dispatch = useDispatch();
    const [profile, setProfile] = useState({});

    /**
     * Allow admin to edit user's profile, different edit profile page url
     * @type {string}
     */

    const queryURL = window.location.pathname;
    const params = queryURL.toString().split('/');
    const username = params[params.length-1];


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

    const saveProfile = () => {
        try {
            save(dispatch, profile).then(r => navigate(`/profile`));
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

    const updateHomeStationChange = (event) => setProfile({
        ...profile,
        homeStop: event.target.value
    });

    return(
        <>

            <div className="row ">
                <div className="col-2"> <Button onClick={()=> navigate(-1)} className={"fa fa-arrow-left btn-dark mt-1"}/> </div>
                <div className="col-8">
                    <h5 className="fw-bold">Edit Profile</h5>
                </div>
                {username === "editprofile" ?
                    <Button className="col-2 btn-primary rounded-pill mb-1 p-1 " onClick={() => saveProfile()}>
                        <span className="d-none d-sm-block"> Save</span>
                        <span className="d-xs-block d-sm-none"><FontAwesomeIcon icon="fa-solid fa-floppy-disk" /></span>
                    </Button>
                    :
                    <Button className="col-2 btn-primary rounded-pill mb-1 " onClick={() => adminSaveProfile()}>
                        <span className="d-none d-sm-block">Save</span>
                        <span className="d-xs-block d-sm-none"><FontAwesomeIcon icon="fa-solid fa-floppy-disk" /></span>
                    </Button>
                }
            </div><div className='border border-black bg-light rounded-2 ps-2 pe-2'>
            <div className="row border-bottom bg-black border-2 rounded-3 pt-3 p-1">

            </div>

            <div className="position-relative border-bottom">
                <img src='/images/train.png' alt='' className="banner"/>
            </div>
            <img src='/images/thomas.png' alt='' className="profile-pic"/>


            <div className="row ms-4 me-4 mt-3 col-11 mb-2">
                <label className='control-label '>
                    Edit Name
                </label>
                {loggedIn && profile && profile.name && profile.username && profile.email && profile.password ?
                    <>
                    <input className="border-1 form-control " value={profile.name} onChange={updateName}/>
                    <label className='control-label mt-2 '>
                        Edit Username
                    </label>
                    <input className="border-1 form-control " value={profile.username} onChange={updateUsername}/>
                    <label className='control-label mt-2 '>
                    Edit Email
                    </label>
                    <input className="border-1 form-control " value={profile.email} onChange={updateEmail}/>
                    <label className='control-label mt-2 '>
                    Edit Password
                    </label>
                    <input className="border-1 form-control " value={profile.password} onChange={updatePassword}/>
                    </>
                    : ""
                }

                {profile && profile.userRole && profile.userRole === "Commuter" ?
                    <>
                            <label> Home Station </label>
                            <select className='border-1 form-select' onChange={updateHomeStationChange}
                                    required={true}>
                                {stations.map(station =>
                                    <option value={station.value} selected={station.selected}>
                                        {station.name}
                                    </option>)
                                }
                            </select>
                    </>
                    : ""
                }

                {profile ?
                    <>
                        <label className='control-label mt-2 '>
                            Edit Date of Birth
                        </label>
                        <input type='date' className="border-1 form-control " onChange={updateDOB}/>
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