import React, {useEffect, useState} from "react";
import * as service from '../../services/authentication-service';
import {Link, Route, Routes, HashRouter, useLocation, useNavigate} from "react-router-dom";
import PinnedStops from "./nav-components/pinned-stops";
import Followers from "./nav-components/followers";
import Following from "./nav-components/following";
import LikedPosts from "./nav-components/liked-posts";
import Posts from "./nav-components/posts";
import Applauds from "./nav-components/applauds";
import ConductorLikes from "./nav-components/conductor-likes";
import './index.css';

const Profile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [profile, setProfile] = useState({});

    const logout = () =>
        service.logout()
            .then(() => navigate('/login'));

    useEffect(async () => {
        try{
            const user = await service.profile();
            setProfile(user);
        }
        catch (e) {
            alert(e);
            //navigate('/');
        }
    }, []);
    console.log(profile)

    return(
        <>
            <div className='border border-black bg-light rounded-2 ps-2 pe-2'>
            <div className="row border-bottom bg-black border-2 rounded-3 pt-3 p-1">
                <div className="col-1">
                    <i className={"fa fa-train"}/>
                </div>
                <div className="col-11">
                    <h5>
                        <span className='fw-bold text-white'>{profile.name}</span>
                        <span className="float-end text-primary mt-1 fs-6">{profile.userRole}</span>
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
            <button onClick={logout} className=" btn btn-warning rounded-pill mt-2 me-2">
                Logout
            </button>
                </div>
            <div className="m-2 ms-3">
                <span className=" fw-bold">@{profile.username}</span>
                {/*<span className="fw-bold float-end ">{profile.followingCount}*/}
                {/*    <span className='text-muted'>Following</span></span>*/}

                <div className="mt-1">{profile.email}</div>


            </div>
            <div className="font-size-15 border-top pt-2 ps-2 pe-1 pb-3">
                <span><i className='fa fa-home ms-1 me-1'/>
                    Home stop: {profile.homeStop}</span>
                <span><i className='fa fa-birthday-cake ms-3 me-1'/>
                 Born {profile.dateOfBirth}</span>
                <span><i className='fa fa-calendar me-1 ms-3'/>
                    Years at MBTA {profile.yearsAtMBTA}</span>
                <span><i className='fa fa-building me-1 ms-3'/>
                    Job title: {profile.yearsAtMBTA}</span>
            </div>


            <div className='ms-2'>
                <ul className='nav mb-2 nav-tabs'>
                    <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                        <Link to="/profile/posts"
                              className={`nav-link ${location.pathname.indexOf('posts') >= 0 ? 'active':''}`}>
                            Posts
                            </Link>
                    </li>

                    <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                        <Link to="/profile/liked-post"
                              className={`nav-link ${location.pathname.indexOf('liked-post') >= 0 ? 'active':''}`}>
                            Liked Posts</Link>
                    </li>
                    <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                        <Link to="/profile/followers"
                              className={`nav-link ${location.pathname.indexOf('followers') >= 0 ? 'active':''}`}>
                            Followers</Link>
                    </li>
                    <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                        <Link to="/profile/following"
                              className={`nav-link ${location.pathname.indexOf('following') >= 0 ? 'active':''}`}>
                            Following</Link>
                    </li>
                    <li className="nav-item ms-1 mb-1 border border-primary rounded-2 ">
                        <Link to="/profile/applauds"
                              className={`nav-link ${location.pathname.indexOf('applauds') >= 0 ? 'active':''}`}>
                            Applauds</Link>
                    </li>

                    <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                        <Link to="/profile/conductor-likes"
                              className={`nav-link ${location.pathname.indexOf('conductor-likes') >= 0 ? 'active':''}`}>
                            Liked conductors</Link>
                    </li>

                    <li className="nav-item ms-1 mb-1 border border-primary rounded-2">
                        <Link to="/profile/pinned-stops"
                              className={`nav-link ${location.pathname.indexOf('pinned-stops') >= 0 ? 'active':''}`}>
                            Pinned Stops</Link>
                    </li>
                </ul>

            </div>

            <Routes>
                <Route path="/followers" element={<Followers/>}/>
                <Route path="/following" element={<Following/>}/>
                <Route path="/liked-post" element={<LikedPosts/>}/>
                <Route path="/your-posts" element={<Posts/>}/>
                <Route path="/applauds" element={<Applauds/>}/>
                <Route path="/conductor-likes" element={<ConductorLikes/>}/>
                <Route path="/pinned-stops" element={<PinnedStops/>}/>
            </Routes>
            </div>
        </>


    );
}

export default Profile;