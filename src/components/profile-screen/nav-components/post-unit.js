import React from "react";
import {Link} from "react-router-dom";
import "./nav-components.css";
import "../../search-screen/search.css";

const PostUnit = ({deletePost, post, user}) => {


    return(
        <div>
            <li className={`list-group-item`}>
                {user === "me" ?
                    <>
                        <Link to={`/posts`} className="line-ends-links" >
                    <span className=''>
                            <span className="col-3 btn  btn-warning float-start">
                                    See All Posts
                            </span>
                    </span>
                        </Link>
                        <span className=''>
                            <span onClick={() => deletePost(post._id)} className="col-3 btn  btn-warning float-end">
                                    Delete Post
                            </span>
                </span>
                    </>
                    : <Link to={`/posts`} className="line-ends-links" >
                    <span className=''>
                            <span className="col-3 btn  btn-warning float-end">
                                    See All Posts
                            </span>
                    </span>
                    </Link>
                }
                <br/>
                <br/>
                <div className=' ' >
                    <div className='row'>
                        <span><span className="fw-bold stop-unit">Post:</span> {post.post}</span>

                    </div>
                </div>
            </li>
        </div>


    )
};

export default PostUnit;