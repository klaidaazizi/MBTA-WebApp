import React, {useEffect, useState} from "react";
import * as service from '../../services/user-service';
import {Link, Route, Routes, HashRouter, useLocation, useNavigate} from "react-router-dom";
import PinnedStops from "./nav-components/pinned-stops";
import Followers from "./nav-components/followers-list";
import Following from "./nav-components/following-list";
import LikedPosts from "./nav-components/liked-posts";
import Posts from "./nav-components/posts";
import Applauds from "./nav-components/applauds";
import ConductorLikes from "./nav-components/conductor-likes";
import './index.css';
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {followExistsAlready, followUser} from "../../services/follow-service";
import {followAlreadyExists} from "../../actions/follow-actions";

const PublicProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [profile, setProfile] = useState({});
    console.log(profile.currentRouteConducting)
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn)
    const followExists = useSelector(state => state.followExists);

    useEffect(async () => {
        try {
            const queryURL = window.location.pathname;
            const params = queryURL.toString().split('/');
            //console.log('params', params[2].toString());
            const username = params[2].toString();
            //console.log(username);
            const user = await service.findUserByUsername(username);
            //findUserByUsername(dispatch,username)
            setProfile(user);
            await followAlreadyExists(dispatch, "me", profile._id);
        } catch (e) {
            alert(e);
            navigate('/');
        }
    }, []);


    const goToConductorRoute = () => {
        navigate('/home');
    }

    const follow = () =>{
        try{
            followUser("me", profile._id)}
        catch(e){
            alert("Already following user!");
        }
    }
    console.log('profile', profile)

    return(
        <>
            <div className="col-2"> <Button onClick={() => navigate(-1)} className={"fa fa-arrow-left btn-dark mt-1"}/> </div>

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
                    {/*{followExists === 0 ?*/}
                    <Button className='btn-primary rounded-pill' onClick={()=> follow()}>Follow</Button>

                    { profile.userRole === 'Conductor' ?
                        <Button className='btn-info ms-2 rounded-pill'>Like</Button> : ''}
                </div>
                    : ''}
                <div className="m-2 ms-3">
                    <span className=" fw-bold">@{profile.username}</span>
                    {/*<span className="fw-bold float-end ">{profile.followingCount}*/}
                    {/*    <span className='text-muted'>Following</span></span>*/}

                    {/*<div className="mt-1">{profile.email}</div>*/}


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
                    Joined: {profile.dateJoined}</span>
                </div>


                <div className='ms-2'>
                    <ul className='nav mb-2 nav-tabs'>
                        <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                            <Link to={`/profile/${profile.username}/lists/posts`}
                                  className={`nav-link ${location.pathname.indexOf('posts') >= 0 ? 'active':''}`}>
                                Posts
                            </Link>
                        </li>

                        <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                            <Link to="/profile/lists/liked-post"
                                  className={`nav-link ${location.pathname.indexOf('liked-post') >= 0 ? 'active':''}`}>
                                Liked Posts</Link>
                        </li>
                        {profile && <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                            <Link to={`/profile/${profile.username}/lists/followers`}
                                  className={`nav-link ${location.pathname.indexOf('followers') >= 0 ? 'active':''}`}>
                                Followers</Link>
                        </li>}
                        {profile &&<li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                            <Link to={`/profile/${profile.username}/lists/following`}
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
                <Route path="lists/followers" element={<Followers profile={profile}/>}/>
                <Route path="lists/following" element={<Following profile={profile}/>}/>
                <Route path="lists/liked-post" element={<LikedPosts/>}/>
                <Route path="lists/your-posts" element={<Posts/>}/>
                <Route path="lists/applauds" element={<Applauds/>}/>
                <Route path="lists/conductor-likes" element={<ConductorLikes/>}/>
                { profile._id ?
                    <Route path="lists/pinned-stops" element={<PinnedStops user={profile}/>}/>
                    :""
                }
            </Routes>
        </>


    );
}

export default PublicProfile;