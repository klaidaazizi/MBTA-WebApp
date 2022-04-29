import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FollowingUnit = ({follow,removeFollow, user}) => {
    const navigate = useNavigate();
    return(
        <div>
            <li className={`list-group-item`}>
                    <div className='row'>
                        <span className="col-7 col-xs-8 col-sm-7 col-md-5 col-lg-4">
                            <div className=''>
                                <span className='fw-bold'>{follow.user.name} </span>
                                <span className="text-muted"> @{follow.user.username}</span>
                            </div>
                            <div className="text-muted">Role: {follow.user.userRole}</div>
                        </span>
                        <div className='col-5 col-xs-4 col-sm-5 col-md-7 col-lg-8 float-end pt-1'>
                            <div className='float-end'>
                            {user === "me" ?
                                <Button onClick={() => removeFollow(follow._id)}
                                        className="btn btn-warning">
                                    <span className="d-none d-md-inline">Unfollow</span>
                                    <span className="d-xs-block d-md-none"><FontAwesomeIcon icon="fa-solid fa-circle-minus"/></span>
                                </Button>
                                : ''}

                                <Button className='ms-2 btn-info' onClick={() => navigate(`/profile/${follow.user.username}`)}>
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

export default FollowingUnit;