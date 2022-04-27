import React, {useEffect, useState} from "react";
import * as service from '../../services/user-service';
import {Link, Route, Routes, HashRouter, useLocation, useNavigate} from "react-router-dom";
import PinnedStops from "./nav-components/pinned-stops";
import Followers from "./nav-components/followers";
import Following from "./nav-components/following";
import Posts from "./nav-components/posts";
import ConductorLikes from "./nav-components/conductor-likes";
import './index.css';
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {likeConductor} from "../../services/conductor-likes-service";
import {conductorLikeAlreadyExists} from "../../actions/conductor-likes-action";

const PublicProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [profile, setProfile] = useState({currentRouteConducting: ''});
    const loggedIn = useSelector(state=> state.sessionReducer.isLoggedIn)
    const userViewing = useSelector(state => state.sessionReducer.profileData)
    const conductorLikeExists = useSelector(state => state.conductorLikeExists);

    const blockLike = () => {
        alert("You have already liked this conductor.");
        return;
    }

    const queryURL = window.location.pathname;
    const params = queryURL.toString().split('/');
    console.log(params)
    const username = params[2].toString();

    useEffect( async () => {
        try{
            const user = await service.findUserByUsername(username);
            setProfile(user);
            console.log(user)
            if(loggedIn){
                await conductorLikeAlreadyExists(dispatch, user._id, userViewing._id)
            }
        }
        catch (e) {
            alert(e);
        }
    }, [username]);

    const goToConductorRoute = () => {
        navigate('/home');
    }

    console.log(profile)

    return(
        <>
            <div className="col-2"> <Button onClick={() => navigate('/profile')} className={"fa fa-arrow-left btn-dark mt-1"}/> </div>

            <div className='mt-2 border border-black bg-light rounded-2 ps-2 pe-2'>
                <div className="row border-bottom bg-black border-2 rounded-3 pt-3 p-1">
                    <div className="col-1">
                        <i className={"fa fa-train"}/>
                    </div>
                    <div className="col-11">
                        <h5>
                            <span className='fw-bold text-white'>{profile.name}</span>
                            <span className="float-end text-primary">{profile.userRole}</span>
                        </h5>

                    </div>
                </div>

                <div className="position-relative border-bottom">
                    <img src='/images/train.png' alt='' className="banner"/>
                </div>
                <img src='/images/thomas.png' alt='' className="profile-pic"/>

                { loggedIn ?
                <div className='float-end mt-2 '>
                    {profile.userRole !== "Admin" && userViewing.userRole === "Admin" ?
                        <button onClick={() => navigate(`/profile/editprofile/${profile.username}`)}
                                type='button'
                                className='btn btn-secondary  rounded-pill  me-2'>Edit User's Profile
                        </button>
                        :
                        ""
                    }
                    <Button className='btn-primary rounded-pill'>Follow</Button>
                    {profile.userRole === 'Conductor' && userViewing.userRole === "Commuter" ?
                        <>
                            {conductorLikeExists === 0 && profile && profile._id ?
                                <Button className='btn-info ms-2 rounded-pill'
                                        onClick={() => likeConductor(userViewing._id, profile._id)}>Like
                                    Conductor</Button>
                                :
                                <Button className='btn-info ms-2 rounded-pill' onClick={blockLike}>Like
                                    Conductor</Button>
                            }
                        </>
                        : ""
                    }
                </div>
                    : ''}
                <div className="m-2 ms-3">
                    <span className=" fw-bold">@{profile.username}</span>


                </div>
                <div className="font-size-15 border-top pt-2 ps-2 pe-1 pb-3">
                    {profile.userRole === "Commuter" ?
                        <>
                            <span><i className='fa fa-home ms-1 me-1'/>
                                Home stop: {profile.homeStop}
                            </span>
                        </>
                        :
                        <>
                            {profile.userRole === "Admin" ?
                                <>
                                    <span><i className='fa fa-building ms-1 me-1'/>
                                        Job title: {profile.jobTitle}
                                    </span>
                                </>
                                :
                                <>
                                    {profile.userRole === "Conductor" && profile.currentRouteConducting !== '' ?
                                        <>
                                            <Link  to={profile.currentRouteConducting}>
                                            <span className="col-3 btn bg-warning ms-1 me-1" >
                                                View My Route
                                             </span>
                                                </Link>
                                                </>
                                        :
                                        ""
                                    }
                                </>
                            }
                        </>
                    }
                    <span><i className='fa fa-birthday-cake ms-3 me-1'/>
                 Born: newDate{profile.dateOfBirth}</span>
                    <span><i className='fa fa-calendar me-1 ms-3'/>
                    Joined: {profile.joinedDate}</span>
                </div>


                <div className='ms-2'>
                    <ul className='nav mb-2 nav-tabs'>
                        {loggedIn ?
                            <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                <Link to={`/profile/${profile.username}/lists/your-posts`}
                                      className={`nav-link ${location.pathname.indexOf('posts') >= 0 ? 'active' : ''}`}>
                                    Posts
                                </Link>
                            </li>
                            : ""
                        }

                        <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                            <Link to="/profile/lists/followers"
                                  className={`nav-link ${location.pathname.indexOf('followers') >= 0 ? 'active':''}`}>
                                Followers</Link>
                        </li>
                        <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                            <Link to="/profile/lists/following"
                                  className={`nav-link ${location.pathname.indexOf('following') >= 0 ? 'active':''}`}>
                                Following</Link>
                        </li>

                            {profile.userRole === "Conductor" ?
                                <>
                                <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                <Link to={`/profile/${profile.username}/lists/conductor-likes`}
                                      className={`nav-link ${location.pathname.indexOf('conductor-likes') >= 0 ? 'active' : ''}`}>
                                    Likes By Commuters
                                </Link>
                                </li>
                                </>
                                :
                                <>
                                {profile.userRole === "Commuter" ?
                                    <>
                                        <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                        <Link to={`/profile/${profile.username}/lists/conductor-likes`}
                                          className={`nav-link ${location.pathname.indexOf('conductor-likes') >= 0 ? 'active' : ''}`}>
                                        Conductors {profile.username} Likes </Link>
                                    </li>
                                    </>
                                    : ""
                                }
                                </>
                            }

                        {profile && profile.userRole === "Commuter" ?
                            <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                <Link to={`/profile/${profile.username}/lists/pinned-stops`}
                                      className={`nav-link ${location.pathname.indexOf('pinned-stops') >= 0 ? 'active' : ''}`}>
                                    Pinned Stops</Link>
                            </li>
                            : ""
                        }
                    </ul>

                </div>

            </div>
            <Routes>
                <Route path="lists/followers" element={<Followers/>}/>
                <Route path="lists/following" element={<Following/>}/>
                <Route path="lists/your-posts" element={<Posts userProfile={profile}/>}/>
                <Route path="lists/conductor-likes" element={<ConductorLikes userProfile={profile} userViewing={userViewing}/>}/>
                { profile._id ?
                    <Route path="lists/pinned-stops" element={<PinnedStops userProfile={profile}/>}/>
                    :""
                }
            </Routes>
        </>


    );
}

export default PublicProfile;