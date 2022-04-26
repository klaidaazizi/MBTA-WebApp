import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllPostsByUser} from "../../../actions/posts-actions";
import Posts from "./posts-list";
import {userDeletesAPost} from "../../../services/post-service";

const UserPosts = ({userProfile}) => {
    const params = useParams();
    const postsByUser = useSelector(state => state.postsByUser);
    const dispatch = useDispatch();

    let user = "me";
    if(params.username){
        user = userProfile._id;
    }
    useEffect(async ()=>
            await findAllPostsByUser(dispatch, user),
        []);
    const deletePost = (pid) => userDeletesAPost(pid).then(findAllPostsByUser(dispatch, user));
    console.log(postsByUser, " pins in user posts")

    return(
        <Posts posts={postsByUser} deletePost={deletePost} user={user}/>
    );
};

export default UserPosts;
