

import React, {useEffect, useState} from "react";
import * as service from '../../services/authentication-service';
import {Link, Route, Routes, HashRouter, useLocation, useNavigate} from "react-router-dom";
// import Followers from "./nav-components/followers";
// import LikedPosts from "./nav-components/liked-posts";
// import Posts from "./nav-components/posts";
// import Following from "./nav-components/following";
// import Applauds from "./nav-components/applauds";
import PinnedStops from "./nav-components/pinned-stops";
// import ConductorLikes from "./nav-components/conductor-likes";
import {Container, Nav, Navbar} from "react-bootstrap";

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
            //navigate('/');
        }
    }, []);
    console.log(profile)

    return(
        <>
            <div className="row mt-3 ms-0">
                <h5 className="fw-bold">{profile.name}</h5>
                <h6 className="mt-0 text-muted"><b>Username</b>: @{profile.username}</h6>
                <h6 className="mt-1"><b>Email Address</b>: {profile.email}</h6>
                <h6 className='mt-1'><b>Role</b>: {profile.userRole}</h6>

            </div>
            <div className='row container border-dark'>
                <button onClick={logout} className="col-3 mt-2 float-start btn btn-warning rounded-pill">
                    Logout
                </button>
            </div>

            {/*<Navbar bg="primary" variant="dark">*/}
            {/*    <Container>*/}
            {/*        <Nav className="me-auto">*/}
            {/*            <Nav.Link href='#posts'>Posts</Nav.Link>*/}
            {/*            <Nav.Link href="#features">Features</Nav.Link>*/}
            {/*            <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
            {/*        </Nav>*/}
            {/*    </Container>*/}
            {/*</Navbar>*/}
            <div className='ms-2'>
                <ul className='nav nav-tabs mt-2 mb-2'>
                    <li className="nav-item">
                        <Link to="/profile/your-posts"
                              className={`nav-link ${location.pathname.indexOf('your-posts') >= 0 ? 'active':''}`}>
                            Posts</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/profile/liked-post"
                              className={`nav-link ${location.pathname.indexOf('liked-post') >= 0 ? 'active':''}`}>
                            Liked Posts</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile/followers"
                              className={`nav-link ${location.pathname.indexOf('followers') >= 0 ? 'active':''}`}>
                            Followers</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile/following"
                              className={`nav-link ${location.pathname.indexOf('following') >= 0 ? 'active':''}`}>
                            Following</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile/applauds"
                              className={`nav-link ${location.pathname.indexOf('applauds') >= 0 ? 'active':''}`}>
                            Applauds</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/profile/conductor-likes"
                              className={`nav-link ${location.pathname.indexOf('conductor-likes') >= 0 ? 'active':''}`}>
                            Liked conductors</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/profile/pinned-stops"
                              className={`nav-link ${location.pathname.indexOf('pinned-stops') >= 0 ? 'active':''}`}>
                            Pinned Stops</Link>
                    </li>
                </ul>

            </div>

            <Routes>
                {/*<Route path="/followers" element={<Followers/>}/>*/}
                {/*<Route path="/following" element={<Following/>}/>*/}
                {/*<Route path="/liked-post" element={<LikedPosts/>}/>*/}
                {/*<Route path="/your-posts" element={<Posts/>}/>*/}
                {/*<Route path="/applauds" element={<Applauds/>}/>*/}
                {/*<Route path="/conductor-likes" element={<ConductorLikes/>}/>*/}
                <Route path="/pinned-stops" element={<PinnedStops/>}/>
            </Routes>

        </>


    );
}

export default Profile;