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
import {followUser} from "../../services/follow-service";
import {followAlreadyExists} from "../../actions/follow-actions";
import {conductorLikeAlreadyExists} from "../../actions/conductor-likes-action";
import {likeConductor} from "../../services/conductor-likes-service";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changeHighlight} from "../../actions/nav-bar-action";

const PublicProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    changeHighlight(dispatch, 'search_users')
    const [profile, setProfile] = useState({currentRouteConducting: ''});
    const loggedIn = useSelector(state=> state.sessionReducer.isLoggedIn)
    const userViewing = useSelector(state => state.sessionReducer.profileData)
    const conductorLikeExists = useSelector(state => state.conductorLikeExists);
    const followExists = useSelector(state => state.followExists);


    const blockLike = () => {
        alert("You have already liked this conductor.");
        return;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function convertDateBirth(myDate) {
        let dateWithoutTime = myDate.split("T");
        var date = dateWithoutTime[0].split("-");
        return months[Number(date[1]) - 1] + " " + date[2] + ", " + date[0];
    };

    const queryURL = window.location.pathname;
    const params = queryURL.toString().split('/');
    const username = params[2].toString();

    useEffect( async () => {
        try{
            const user = await service.findUserByUsername(username);
            setProfile(user);
            //console.log(user)
            if(loggedIn){
                await conductorLikeAlreadyExists(dispatch, user._id, userViewing._id)
                await followAlreadyExists(dispatch, user._id, userViewing._id)
            }
        }
        catch (e) {
            alert(e);
        }
    }, [username]);

    const goToConductorRoute = () => {
        navigate('/home');
    }

    const follow = () =>{
        {followExists === 0 ?
            followUser("me", profile._id) :
            alert("Already following user!")}
    }
    //console.log('profile', profile)


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
                            <span className="float-end text-primary d-none d-md-block">{profile.userRole}</span>
                        </h5>

                    </div>
                </div>

                <div className="position-relative border-bottom">
                    <img src='/images/train.png' alt='' className="banner"/>
                </div>
                <img src='/images/thomas.png' alt='' className="profile-pic"/>

                { loggedIn ?
                <div className='float-end mt-2 me-1'>
                    {profile.userRole !== "Admin" && userViewing.userRole === "Admin" ?
                        <button onClick={() => navigate(`/profile/editprofile/${profile.username}`)}
                                type='button'
                                className='btn btn-secondary  rounded-pill  me-2'>
                            <span className="d-none d-md-block">Edit User's Profile</span>
                            <span className="d-sm-block d-md-none"><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></span>
                        </button>
                        :
                        ""
                    }
                    <Button className='btn-primary rounded-pill' onClick={()=> follow()}>
                        <span className="d-none d-sm-block">Follow</span>
                        <span className="d-xs-block d-sm-none"><FontAwesomeIcon icon="fa-solid fa-plus" /></span>
                    </Button>
                    { profile.userRole === 'Conductor' && userViewing.userRole === "Commuter" ?
                        <>
                            {conductorLikeExists === 0 && profile && profile._id ?
                                <Button className='btn-info ms-2 rounded-pill'
                                        onClick={() => likeConductor(userViewing._id, profile._id)}>
                                    <span className="d-none d-md-block">Like Conductor</span>
                                    <span className="d-sm-block d-md-none"><FontAwesomeIcon icon="fa-solid fa-heart" /></span></Button>
                                :
                                <Button className='btn-info ms-2 rounded-pill' onClick={blockLike}>
                                    <span className="d-none d-md-block">Like Conductor</span>
                                    <span className="d-sm-block d-md-none"><FontAwesomeIcon icon="fa-solid fa-heart" />
                                    </span></Button>
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
                                ""
                                // <>
                                //     {profile.userRole === "Conductor" && profile.currentRouteConducting !== '' ?
                                //         <>
                                //             <Link  to={profile.currentRouteConducting}>
                                //             <span className="col-3 btn bg-warning ms-1 me-1" >
                                //                 View My Route
                                //              </span>
                                //                 </Link>
                                //                 </>
                                //         :
                                //         ""
                                //     }
                                // </>
                            }
                        </>
                    }
                    {profile && profile.userRole && profile.userRole === "Conductor" ?
                        <span className="d-md-inline d-none">
                            <i className='fa fa-birthday-cake ms-1 me-1'/>
                            {profile && profile.dateOfBirth ?
                                <span
                                    className="">Birthday: {convertDateBirth(profile.dateOfBirth)} </span>
                                : ''}
                             </span>
                        :
                        <span className="d-md-inline d-none"><i className='fa fa-birthday-cake ms-3 me-1 '/>
                            { profile && profile.dateOfBirth?
                                <span className="">Birthday:  {convertDateBirth(profile.dateOfBirth)} </span>
                                :''}
                             </span>
                    }

                    {/*<span>*/}
                    {/*    <i className='fa fa-birthday-cake ms-3 me-1'/>*/}
                    {/*    Born: newDate{profile.dateOfBirth}*/}
                    {/*</span>*/}
                    {/*<span>*/}
                    {/*    <i className='fa fa-calendar me-1 ms-3'/>*/}
                    {/*    Joined: {profile.joinedDate}*/}
                    {/*</span>*/}
                </div>

                <div className=''>
                    <div className=''>
                        <ul className='mb-2 nav nav-tabs nav-justified'>
                        {loggedIn ?
                            <li className="nav-item">
                                <Link to={`/profile/${profile.username}/lists/your-posts`}
                                      className={`nav-link border ${location.pathname.indexOf('posts') >= 0 ? 'active' : ''}`}>
                                    <FontAwesomeIcon icon="fa-solid fa-comment" className="me-1"/>
                                    <br/><span className="d-none d-md-inline">Posts</span>
                                </Link>
                            </li>
                            : ""
                        }

                        <li className="nav-item ">
                            <Link to={`/profile/${profile.username}/lists/followers`}
                                  className={`nav-link border ${location.pathname.indexOf('followers') >= 0 ? 'active':''}`}>
                                <FontAwesomeIcon icon="fa-solid fa-user-group" className="me-1"/>
                                <br/><span className="d-none d-md-inline">Followers</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={`/profile/${profile.username}/lists/following`}
                                  className={`nav-link border ${location.pathname.indexOf('following') >= 0 ? 'active':''}`}>
                                <FontAwesomeIcon icon="fa-solid fa-user-plus" className='me-1' />
                                <br/><span className="d-none d-md-inline">Following</span></Link>
                        </li>

                            {profile.userRole === "Conductor" ?
                                <>
                                <li className="nav-item">
                                <Link to={`/profile/${profile.username}/lists/conductor-likes`}
                                      className={`nav-link border ${location.pathname.indexOf('conductor-likes') >= 0 ? 'active' : ''}`}>
                                    <FontAwesomeIcon icon="fa-solid fa-heart" className='me-1' />
                                    <br/><span className="d-none d-md-inline"> Commuters</span>
                                </Link>
                                </li>
                                </>
                                :
                                <>
                                {profile.userRole === "Commuter" ?
                                    <>
                                        <li className="nav-item">
                                        <Link to={`/profile/${profile.username}/lists/conductor-likes`}
                                          className={`nav-link border ${location.pathname.indexOf('conductor-likes') >= 0 ? 'active' : ''}`}>
                                            <FontAwesomeIcon icon="fa-solid fa-heart" className='me-1' />
                                            <br/><span className="d-none d-md-inline"> Conductors</span></Link>
                                    </li>
                                    </>
                                    : ""
                                }
                                </>
                            }

                        {profile && profile.userRole === "Commuter" ?
                            <li className="nav-item">
                                <Link to={`/profile/${profile.username}/lists/pinned-stops`}
                                      className={`nav-link border ${location.pathname.indexOf('pinned-stops') >= 0 ? 'active' : ''}`}>
                                    <FontAwesomeIcon icon="fa-solid fa-thumbtack" className='me-1' />
                                    <br/><span className="d-none d-md-inline">Stops</span></Link>
                            </li>
                            : ""
                        }
                    </ul>

                </div>

            </div>
            <Routes>
                <Route path="lists/followers" element={<Followers userProfile={profile}/>}/>
                <Route path="lists/following" element={<Following userProfile={profile}/>}/>
                <Route path="lists/your-posts" element={<Posts userProfile={profile}/>}/>
                <Route path="lists/conductor-likes" element={<ConductorLikes userProfile={profile} userViewing={userViewing}/>}/>
                { profile._id ?
                    <Route path="lists/pinned-stops" element={<PinnedStops userProfile={profile}/>}/>
                    :""
                }
            </Routes>
            </div>
        </>


    );
}

export default PublicProfile;