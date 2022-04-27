import React from "react";
import {useDispatch} from "react-redux";
import "./post.css";

const PostFeedItem = (
    {
        post = {
            post: "",
            stats: {
                likes: 0,
                applauds: 0
            },
            user: "",
            timePosted: "",
        }
    }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="acct-info">
                <div className="w-100 postContainer p-2">
                    <span className="posterName"> {post.user.name} -- @{post.user.username}  </span>
                    <p className="postContent">{post.post}</p>
                    {/*<div>*/}
                    {/*    <span className="postIcons">*/}
                    {/*        <i onClick={() => updateStats(dispatch, {*/}
                    {/*            ...post,*/}
                    {/*            likes: post.stats.likes + 1*/}
                    {/*        })}>Likes: {post.stats.likes}<FontAwesomeIcon icon="fa-solid fa-thumbs-up" /></i>*/}
                    {/*            </span>*/}

                    {/*    <span className="postIcons">*/}
                    {/*        <i onClick={() => updateStats(dispatch, {*/}
                    {/*            ...post,*/}
                    {/*            stats: post.stats.applauds + 1*/}
                    {/*        })}>Applauds: {post.stats.applauds}<FontAwesomeIcon className="postIcons" icon="fa-solid fa-thumbs-down"/></i>*/}
                    {/*            </span>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )

}

export default PostFeedItem;