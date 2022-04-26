import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {unfollowUser} from "../../../services/follow-service";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {findAllUserFollowers} from "../../../actions/follow-actions";
import {findUserById} from "../../../services/user-service";

const Follow = ({follow, profile}) => {
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn)
    const user = follow.user;
    const follower = follow.follower;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(follow._id,follower,user);
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
                            {loggedIn ? <Button onClick={() => unfollowUser(follow._id).then(findAllUserFollowers(dispatch,user))}
                              className="btn btn-danger ms-2">
                                    Unfollow
                            </Button> :''}
                        </div>
                    </div>
            </li>
        </div>


    )
};

export default Follow;