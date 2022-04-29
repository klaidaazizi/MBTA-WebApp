import React from "react";
import PostUnit from "./post-unit";

function Posts({posts = [], deletePost, user}) {

    return (
        <div>
            <ul className=" list-group">
                {
                    posts.map && posts.map(post => {
                        return (
                            <PostUnit key={post._id}
                                      deletePost={deletePost}
                                      post={post}
                                      user={user}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Posts;