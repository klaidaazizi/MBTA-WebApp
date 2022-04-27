import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts, deletePost, createPost} from "../../actions/posts-actions";
import {userDeletesAPost, userPostsAPost} from "../../services/post-service";

const PostList = () => {
    const dispatch = useDispatch();
    const allPosts = useSelector(state => state.allPosts);
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn)
    const user = useSelector(state => state.sessionReducer.profileData)
    console.log(user)
    const [newPost, setPost] =
        useState({post: 'New post', user: {username: user.username}});

    useEffect(  async () => {
             await findAllPosts(dispatch)
        }
        ,
        [user]);


    const createAndUpdateList = (newPost) => createPost(dispatch, "me", newPost);
    const deleteAndUpdateList = (postId) => deletePost(dispatch, postId).then(findAllPosts(dispatch));
    return(
        <div>
            <h2>MBTA Community Posts</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={() => createAndUpdateList(newPost)}
                            className="btn btn-primary float-end">
                        Post!
                    </button>


                    <textarea className="form-control w-75"
                              onChange={(e) =>
                                    setPost({post: e.target.value})} placeholder="Share your thoughts..."></textarea>
                </li>


                    {
                        allPosts.map(post =>
                        <li key={post._id}
                            className="list-group-item">
                            {loggedIn && user.userRole === "Admin" ?
                                <>
                                <span onClick={() => deleteAndUpdateList(post._id)}
                                      className="col-3 btn  btn-success float-end">
                                    Delete Post
                                </span>
                                </>
                                :
                                <>
                                {loggedIn && user.userRole === "Commuter" && post.user._id === user._id ?
                                    <>
                                    <span onClick={() => deleteAndUpdateList(post._id)}
                                          className="col-3 btn  btn-success float-end">
                                    Delete Post
                                    </span>
                                    </>
                                    :
                                    <>
                                        {loggedIn && user.userRole === "Conductor" && post.user._id === user._id ?
                                            <>
                                    <span onClick={() => deleteAndUpdateList(post._id)}
                                          className="col-3 btn  btn-success float-end">
                                    Delete Post
                                    </span>
                                            </>
                                            :
                                            ""
                                        }
                                    </>
                                }
                                </>
                            }
                            <span className="posterName"> {post.user.name} -- @{post.user.username}  </span>
                            <p className="postContent">{post.post}</p>
                        </li>

                    )
                }
            </ul>
        </div>
    )
};

export default PostList;
