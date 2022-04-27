import React, {useEffect, useState} from "react";
import * as service from '../../services/authentication-service';
import {Link, Route, Routes, HashRouter, useLocation, useNavigate, useParams} from "react-router-dom";
import PinnedStops from "./nav-components/pinned-stops";
import Followers from "./nav-components/followers-list";
import Following from "./nav-components/following-list";
import LikedPosts from "./nav-components/liked-posts";
import Posts from "./nav-components/posts";
import Applauds from "./nav-components/applauds";
import ConductorLikes from "./nav-components/conductor-likes";
import './index.css';
import UserSearchBar from "../user-search";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/auth-actions";
import UserSearchScreen from "../user-search/user-search-screen";
import {findAlertsByStop} from "../../actions/alerts-action";

const Profile = () => {
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn)
    const user = useSelector(state => state.sessionReducer.profileData)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        {loggedIn ? setProfile(user) : navigate('/profile-search')}
        //const user = await service.profile();
    }, [loggedIn]);

    const goToConductorRoute = () => {
        navigate('/home');
    }
    //const date = new Date(profile.dateOfBirth).toDateString();

    return(
        <>
                <div className='container'>
                <div className='box top'>
                    <UserSearchBar/>
                </div>
                <div className='mt-5 box border border-black bg-light rounded-2 ps-2 pe-2'>
                    <div className="row border-bottom bg-black border-2 rounded-3 pt-3 p-1">
                        <div className="col-1">
                            {profile && profile.userRole === 'Commuter' ? <i className={"fa fa-briefcase"}/>: ''}
                            {profile && profile.userRole === 'Conductor' ? <i className={"fa fa-train"}/>: ''}
                            {profile && profile.userRole === 'Admin' ? <i className={"fa fa-desktop"}/>: ''}
                        </div>
                        <div className="col-11">
                            <h5>
                                <span className='fw-bold text-white'>{profile && profile.name? profile.name: ''}</span>
                                <span className="float-end text-primary">{profile && profile.userRole? profile.userRole: ''}</span>
                            </h5>

                        </div>
                    </div>

                    <div className="position-relative border-bottom">
                        <img src='/images/train.png' alt='' className="banner"/>
                    </div>
                    <img src='/images/thomas.png' alt='' className="profile-pic"/>

                    <div className='float-end'>
                        <button onClick={() => navigate('/profile/editprofile')}
                                type='button'
                                className='btn btn-secondary  rounded-pill mt-2 me-2'>Edit Profile
                        </button>
                        <button onClick={() => logout(dispatch).then(navigate('/profile-search'))} className=" btn btn-warning rounded-pill mt-2 me-2">
                            Logout
                        </button>
                    </div>
                    <div className="m-2 ms-3">
                        <span className=" fw-bold">@{profile && profile.username? profile.username :''}</span>
                        {/*<span className="fw-bold float-end ">{profile.followingCount}*/}
                        {/*    <span className='text-muted'>Following</span></span>*/}

                        <div className="mt-1">{profile && profile.email? profile.email: ''}</div>


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
                                        {profile.userRole === "Conductor" ?
                                            <>
                                                {profile.currentRouteConducting !== '' ?
                                                    <>
                                                        <Link  to={profile.currentRouteConducting}>
                                                        <span className="col-4 btn bg-warning ms-1 me-1" >
                                                            View/Update My Route
                                                        </span>
                                                        </Link>
                                                    </>
                                                    :
                                                    <>
                                                        <Link  to="/home">
                                                        <span className="col-3 btn bg-warning ms-1 me-1">
                                                            Choose My Route
                                                        </span>
                                                        </Link>
                                                    </>
                                                }
                                                </>
                                                :
                                                ""
                                        }
                                    </>
                                }
                            </>
                        }
                        <span><i className='fa fa-birthday-cake ms-3 me-1'/>
                 Born: { profile && profile.dateOfBirth? new Date(profile.dateOfBirth).toDateString() :''}</span>
                        <span><i className='fa fa-calendar me-1 ms-3'/>
                    Joined: {profile && profile.dateJoined? new Date(profile.dateJoined).toDateString():''}</span>
                    </div>


                    <div className='ms-2'>
                        <ul className='nav mb-2 nav-tabs'>
                            <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                <Link to="/profile/lists/posts"
                                      className={`nav-link ${location.pathname.indexOf('posts') >= 0 ? 'active':''}`}>
                                    Posts
                                </Link>
                            </li>

                            <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                <Link to="/profile/lists/liked-post"
                                      className={`nav-link ${location.pathname.indexOf('liked-post') >= 0 ? 'active':''}`}>
                                    Liked Posts</Link>
                            </li>
                            {user && <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                <Link to="/profile/lists/followers"
                                      className={`nav-link ${location.pathname.indexOf('followers') >= 0 ? 'active':''}`}>
                                    Followers</Link>
                            </li>}
                            {user && <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                <Link to="/profile/lists/following"
                                      className={`nav-link ${location.pathname.indexOf('following') >= 0 ? 'active':''}`}>
                                    Following</Link>
                            </li>}
                            <li className="nav-item ms-1 mb-1 border border-primary rounded-2 ">
                                <Link to="/profile/lists/applauds"
                                      className={`nav-link ${location.pathname.indexOf('applauds') >= 0 ? 'active':''}`}>
                                    Applauds</Link>
                            </li>

                            <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                <Link to="/profile/lists/conductor-likes"
                                      className={`nav-link ${location.pathname.indexOf('conductor-likes') >= 0 ? 'active':''}`}>
                                    Liked conductors</Link>
                            </li>

                            {user && user.userRole === "Commuter" ?
                                <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                                    <Link to="/profile/lists/pinned-stops"
                                          className={`nav-link ${location.pathname.indexOf('pinned-stops') >= 0 ? 'active' : ''}`}>
                                        Pinned Stops</Link>
                                </li>
                                : ""
                            }
                        </ul>

                    </div>

                    <Routes>
                        <Route path="/followers" element={<Followers profile={user}/>}/>
                        <Route path="/following" element={<Following profile={user}/>}/>
                        <Route path="/liked-post" element={<LikedPosts/>}/>
                        <Route path="/your-posts" element={<Posts/>}/>
                        <Route path="/applauds" element={<Applauds/>}/>
                        <Route path="/conductor-likes" element={<ConductorLikes/>}/>
                        <Route path="/pinned-stops" element={<PinnedStops userProfile={user}/> }/>
                    </Routes>
                </div>

            </div>

        </>


    );
}

export default Profile;