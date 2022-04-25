import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {unfollowUser} from "../../../services/follow-service";
import {Button} from "react-bootstrap";

const Follow = ({follow}) => {
    const user = follow.user;
    const follower = follow.follower;
    const navigate = useNavigate();
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
                        <Button onClick={() => unfollowUser(follow._id)}
                              className="btn btn-danger ms-2">
                                    Unfollow
                            </Button>
                        </div>
                    </div>
            </li>
        </div>


    )
};

export default Follow;