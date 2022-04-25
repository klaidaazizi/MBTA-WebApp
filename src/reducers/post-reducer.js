import {
    FIND_ALL_POSTS,
    CREATE_POST,
    FIND_POST_BY_ID,
    UPDATE_POST,
    UPDATE_STATS,
    DELETE_POST
} from "../actions/posts-actions";
import posts from "../data/post.json"

const postReducer =
    (state = posts, action) => {
    switch(action.type) {
        case FIND_ALL_POSTS:
            return action.posts;
        case CREATE_POST:
            return [
                ...state,
                action.newPost
            ];
        case FIND_POST_BY_ID:
            return action.sPost;
        case UPDATE_POST:
            return state.map(post => post._id === action.post._id ? action.post : post);
        case UPDATE_STATS:
            return state.map(stats => stats._id === action.post._id ? action.stats : stats);
        case DELETE_POST:
            return state.filter(
                post => post._id !== action.post._id
            );
        default:
            return state;
    }
}

export default postReducer;