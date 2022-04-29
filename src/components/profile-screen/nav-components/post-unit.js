import React from "react";
import {Link} from "react-router-dom";
import "./nav-components.css";
import "../../search-screen/search.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PostUnit = ({deletePost, post, user}) => {


    return(
        <div>
            <li className={`list-group-item`}>
                {user === "me" ?
                    <>
                        <Link to={`/posts`} className="line-ends-links" >
                    <span className='btn btn-warning float-start'>
                         <span className="d-xs-block d-md-none "><FontAwesomeIcon icon="fa-solid fa-eye"/></span>
                        <span className="col-3  d-none d-md-inline">See All Posts</span>
                            {/*<span className="col-3 btn  btn-warning float-start">*/}
                            {/*        See All Posts*/}
                            {/*</span>*/}
                    </span>
                        </Link>
                        <span className=''>
                            <span onClick={() => deletePost(post._id)} className="col-3 btn  btn-warning float-end">
                                    Delete Post
                            </span>
                </span>
                    </>
                    : <Link to={`/posts`} className="line-ends-links" >
                    <span className='btn btn-warning  float-end'>
                        <span className="d-xs-block d-md-none "><FontAwesomeIcon icon="fa-solid fa-eye"/></span>
                        <span className="col-3  d-none d-md-inline">See All Posts</span>
                            {/*<span className="col-3 btn  btn-warning float-end">*/}
                            {/*        See All Posts*/}
                            {/*</span>*/}
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