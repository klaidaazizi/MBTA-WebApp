import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {followExistsAlready, followUser, unfollowUser} from "../../../services/follow-service";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FollowerUnit = ({follow,removeFollow, user}) => {
    console.log(user)
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn)
    const navigate = useNavigate();
    return(
        <div>
            <li className={`list-group-item`}>
                    <div className='row'>
                        <div className='col-7 col-xs-8 col-sm-7 col-md-5 col-lg-5'>
                                <span className='fw-bold'>{follow.follower.name} </span>
                                <span className="text-muted"> @{follow.follower.username}</span>

                        <div className="text-muted">Role: {follow.follower.userRole}</div>
                        </div>
                        <div className='col-5 col-xs-4 col-sm-5 col-md-7 col-lg-7 float-end pt-1'>
                            <div className='float-end'>
                                {user === "me" ?
                                <Button onClick={() => removeFollow(follow._id)}
                                        className="btn btn-warning">
                                    <span className="d-none d-md-inline ">Remove</span>
                                    <span className="d-xs-block d-md-none"><FontAwesomeIcon icon="fa-solid fa-circle-minus"/></span>
                                </Button>
                                : ''}

                                    <Button className='ms-2 btn-info' onClick={() => navigate(`/profile/${follow.follower.username}`)}>
                                    <span className="d-none d-md-inline ">Go To Profile</span>
                                    <span className="d-xs-block d-md-none"><FontAwesomeIcon icon="fa-solid fa-user"/></span>
                                    </Button>
                            </div>

                        </div>
                    </div>
            </li>
        </div>


    )
};

export default FollowerUnit;