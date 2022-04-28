import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {followExistsAlready, followUser, unfollowUser} from "../../../services/follow-service";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const FollowerUnit = ({follow,removeFollow, user}) => {
    console.log(user)
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn)
    const navigate = useNavigate();
    return(
        <div>
            <li className={`list-group-item`}>
                    <div className='row'>
                        <div className='col-6'>
                                <span className='fw-bold'>{follow.follower.name} </span>
                                <span className="text-muted"> @{follow.follower.username}</span>

                        <div className="text-muted">Role: {follow.follower.userRole}</div>
                        </div>
                        <div className='col-6 float-end mt-1'>
                            {user === "me" ?
                                <Button onClick={() => removeFollow(follow._id)}
                                        className="btn btn-warning ms-3">
                                    Remove</Button>
                                : ''}
                                {/*// <>*/}
                                {/*//     <Button onClick={() => navigate(`/profile`)}*/}
                                {/*//             className="btn btn-info float-end">*/}
                                {/*//         Go To Profile*/}
                                {/*//     </Button>*/}
                                {/*// </>*/}
                                {/*// :*/}
                                    <Button onClick={() => navigate(`/profile/${follow.follower.username}`)}
                                        className="btn btn-info float-end">
                                    Go To Profile
                                </Button>


                        </div>
                    </div>
            </li>
        </div>


    )
};

export default FollowerUnit;