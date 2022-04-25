import React from "react";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./post.css";
import {updateStats} from "../../actions/posts-actions";

const PostFeedItem = (
    {
        post = {
            post: "",
            stats: {
                likes: 0,
                applauds: 0
            },
            poster: "",
            timePosted: "",
        }
    }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <h2 className="mb-2">Community Posts</h2>
            <div className="acct-info">
                <div className="w-100 postContainer p-2">
                    <span className="posterName">{post.poster} - </span>
                    <span className="posterHandle">{post.timePosted}</span>
                    <p className="postContent">{post.post}</p>
                    <div>
                        <span className="postIcons">
                            <i onClick={() => updateStats(dispatch, {
                                ...post,
                                likes: post.stats.likes + 1
                            })}>Likes: {post.stats.likes}<FontAwesomeIcon icon="fa-solid fa-thumbs-up" /></i>
                                </span>

                        <span className="postIcons">
                            <i onClick={() => updateStats(dispatch, {
                                ...post,
                                stats: post.stats.applauds + 1
                            })}>Applauds: {post.stats.applauds}<FontAwesomeIcon className="postIcons" icon="fa-solid fa-thumbs-down"/></i>
                                </span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PostFeedItem;
