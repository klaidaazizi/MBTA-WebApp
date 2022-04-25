import React, {useEffect} from "react";
import PostFeedItem from "./post-feed-item";
import * as service from "../../services/post-service";
import {findAllPosts} from "../../actions/posts-actions";
import {useDispatch, useSelector} from "react-redux";

const PostList = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const findAllPosts = async () => {
        const posts = await service.findAllPosts();
        dispatch({
            type: "FIND_ALL_POSTS",
            posts: posts
        });
    }
    useEffect(findAllPosts, []);
    return (
        <ul>
            {
                posts.map(post => {
                    return (
                        <div>
                            <PostFeedItem post={post}/>
                        </div>
                    );
                })
            }
        </ul>
    )
};

export default PostList;