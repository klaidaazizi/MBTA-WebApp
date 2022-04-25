import React, {useEffect, useState} from "react";
import * as service from "../../services/post-service";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>
        service.findAllPosts()
            .then(posts => setPosts(posts)));
    return(
        <div>
            <h2>Posts</h2>
            <ul className="list-group">
                {
                    posts.map(post =>
                        <li key={post._id}
                            className="list-group-item">
                            <span className="posterName">{post.user} - </span>
                            <span className="posterHandle">{post.timePosted}</span>
                            <p className="postContent">{post.post}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

export default PostList;
