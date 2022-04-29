import {
    FIND_ALL_POSTS,
    CREATE_POST,
    DELETE_POST, FIND_ALL_POSTS_BY_USER
} from "../actions/posts-actions";

const PostReducer =
    (state = [], action) => {
    switch(action.type) {
        case FIND_ALL_POSTS:
            return action.allPosts;
        case FIND_ALL_POSTS_BY_USER:
            return action.postsByUser;
        case CREATE_POST:
            return [
                ...state,
                action.newPost
            ];
        case DELETE_POST:
            return state.filter(
                post => post._id !== action.post._id
            );
        default:
            return state;
    }
}

export default PostReducer;