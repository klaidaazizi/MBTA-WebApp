import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useSelector} from "react-redux";

const FollowingUnit = ({follow,removeFollow, user}) => {
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn)
    const navigate = useNavigate();
    return(
        <div>
            <li className={`list-group-item`}>
                    <div className='row'>
                        <span className="col-6">
                            <div className=''>
                                <span className='fw-bold'>{follow.user.name} </span>
                                <span className="text-muted"> @{follow.user.username}</span>
                            </div>
                            <div className="text-muted">Role: {follow.user.userRole}</div>
                        </span>
                        <div className='col-6 float-end mt-1'>
                            {user === "me" ?
                                <Button onClick={() => removeFollow(follow._id)}
                                        className="btn btn-warning ms-2">
                                    Unfollow</Button>
                                : ''}

                            {/*{user === "me" ?*/}
                            {/*    <Button onClick={() => navigate(`/profile`)}*/}
                            {/*            className="btn btn-info float-end">*/}
                            {/*        Go To Profile*/}
                            {/*    </Button>*/}
                            {/*    :*/}
                                <Button onClick={() => navigate(`/profile/${follow.user.username}`)}
                                        className="btn btn-info float-end">
                                    Go To Profile
                                </Button>


                        </div>
                    </div>
            </li>
        </div>


    )
};

export default FollowingUnit;