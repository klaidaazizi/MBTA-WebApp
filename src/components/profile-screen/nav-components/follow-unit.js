import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {followExistsAlready, followUser, unfollowUser} from "../../../services/follow-service";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const Follow = ({follow,unfollow}) => {
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn)
    const user = follow.user;
    const follower = follow.follower;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const followExists = followExistsAlready(user._id,follower._id));
    //console.log('follow exists?', followExists);

    return(
        <div>
            <li className={`list-group-item`}>

                    <div className='row'>
                        <span className="col-6">
                            <div className='fw-bold'>{user.name}</div>

                            <div className="text-muted">@{user.username}</div>
                        </span>
                        <div className='col-6 float-end mt-1'>
                        <Button onClick={()=> navigate(`/profile/${user.username}`)}
                              className="btn btn-info">
                                    Go To Profile
                            </Button>
                            {loggedIn ?
                                <Button onClick={() => unfollow(follow._id)}
                                                              className="btn btn-danger ms-2">
                                        Unfollow </Button>
                                    // <Button onClick={() => followUser(user._id,follower._id)}
                                    //         className="btn btn-danger ms-2">
                                    //     Follow </Button>}
                            : ''}
                        </div>
                    </div>
            </li>
        </div>


    )
};

export default Follow;