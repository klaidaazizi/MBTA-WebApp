import React from "react";
import {Link} from "react-router-dom";
import "./nav-components.css";
import "../../search-screen/search.css";

const ConductorLikeItem = ({unlikeConductor, like, user, userProfile, userViewing}) => {

    return(
        <div>
            <li className='list-group-item '>
                {user === "me" && userProfile.userRole === "Commuter" ?
                    <>
                        <Link to={`/profile/${like.conductor.username}`} className='like-buttons'>
                    <span className='like-buttons'>
                            <span className="col-12 btn  btn-warning float-start">
                                    View {like.conductor.username}'s Profile
                            </span>
                    </span>
                        </Link>
                        <span className='like-buttons float-end'>
                            <span onClick={() => unlikeConductor(like._id)}
                                  className="col-12 btn  btn-warning ">
                                    Unlike Conductor
                            </span>
                        </span>
                        <div>
                                <span>
                                    Conductor you liked: {like.conductor.username}
                                </span>
                        </div>
                    </>
                    :
                    <>
                        {user === "me" && userProfile.userRole === "Conductor" ?
                            <>
                                <Link to={`/profile/${like.likedBy.username}`} className='like-buttons'>
                        <span className='like-buttons'>
                            <span className="col-12 btn  btn-warning float-start">
                                    View {like.likedBy.username}'s Profile
                            </span>
                        </span>
                                </Link>
                                <span className='like-buttons float-end'>
                                    <span onClick={() => unlikeConductor(like._id)}
                                  className="col-12 btn  btn-warning ">
                                    Remove Commuter Like
                                    </span>
                                </span>
                                <div>
                                <span>
                                    Commuter who liked you: {like.likedBy.username}
                                </span>
                                </div>
                            </>
                            :
                            <>
                                {user !== "me" && userProfile.userRole === "Conductor" ?
                                    <>
                                        {userViewing && userViewing.username && userViewing.username === like.likedBy.username ?
                                            <>
                                            <Link to={`/profile`} className='like-buttons'>
                                            <span className='like-buttons'>
                                                <span className="col-12 btn  btn-warning float-start">
                                                    Liked by you -- View your profile
                                                </span>
                                            </span>
                                            </Link>
                                            <div>
                                            <span>
                                            Commuter who liked {userProfile.username}: {like.likedBy.username}
                                            </span>
                                            </div>
                                            </>

                                            :
                                            <>
                                            <Link to={`/profile/${like.likedBy.username}`} className='like-buttons'>
                                            <span className='like-buttons'>
                                                <span className="col-12 btn  btn-warning float-start">
                                                    View {like.likedBy.username}'s Profile
                                                </span>
                                            </span>
                                            </Link>
                                            <div>
                                            <span>
                                            Commuter who liked {userProfile.username}: {like.likedBy.username}
                                            </span>
                                            </div>
                                                </>
                                        }
                                    </>
                                    :
                                    <>
                                        {user !== "me" && userProfile.userRole === "Commuter" ?
                                            <>
                                                {userViewing && userViewing.username && userViewing.username === like.conductor.username ?
                                                    <>
                                                    <Link to={`/profile`} className='like-buttons'>
                                            <span className='like-buttons'>
                                                <span className="col-12 btn  btn-warning float-start">
                                                    They liked you! -- View your profile
                                                </span>
                                            </span>
                                                    </Link>
                                                    <div>
                                            <span>
                                                    Conductor {userProfile.username} liked: {like.conductor.username}
                                            </span>
                                                    </div>
                                                    </>
                                                    :
                                                    <>
                                                    <Link to={`/profile/${like.conductor.username}`} className='like-buttons'>
                                            <span className='like-buttons'>
                                                <span className="col-12 btn btn-warning float-start">
                                                    View {like.conductor.username}'s Profile
                                                </span>
                                            </span>
                                                    </Link>
                                                    <div>
                                                    <span>
                                                    Conductor {userProfile.username} liked: {like.conductor.username}
                                                    </span>
                                                    </div>
                                                    </>

                                                }
                                            </>
                                            :
                                            ""
                                        }
                                    </>
                                }
                                </>
                        }
                    </>
                }
            </li>
        </div>
    )
};

export default ConductorLikeItem;