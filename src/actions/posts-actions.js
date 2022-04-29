import * as service from "../services/post-service";

export const FIND_ALL_POSTS = "FIND_ALL_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FIND_POST_BY_ID = "FIND_POST_BY_ID";
export const UPDATE_POST = "UPDATE_POST";
export const UPDATE_STATS = "UPDATE_STATS";
export const DELETE_POST = "DELETE_POST";
export const FIND_ALL_POSTS_BY_USER = "FIND_ALL_POSTS_BY_USER";


export const findAllPosts = async (dispatch) => {
    const allPosts = await service.findAllPosts();
    dispatch({
        type: FIND_ALL_POSTS,
        allPosts
    });
}

export const findAllPostsByUser = async (dispatch, uid) => {
    const postsByUser = await service.findAllPostsByUser(uid);
    dispatch({
        type: FIND_ALL_POSTS_BY_USER,
        postsByUser
    });
}

export const createPost = async (dispatch, uid, post) => {
    const newPost = await service.userPostsAPost(uid, post);
    dispatch({
        type: CREATE_POST,
        newPost
    });
};

export const findPostsById = async (dispatch, postId) => {
    const sPost = await service.findPostsById(postId);
    dispatch({
        type: FIND_POST_BY_ID,
        sPost
    });
};

export const updatePost = async (dispatch, post) => {
    const status = await service.userUpdatesAPost(post);
    dispatch({
        type: UPDATE_POST,
        status
    });
};

export const updateStats = async (dispatch, stats) => {
    const status = await service.updateStats(stats);
    dispatch({
        type: UPDATE_STATS,
        status
    });
};

export const deletePost = async (dispatch, post) => {
    const response = await service.userDeletesAPost(post);
    dispatch({
        type: DELETE_POST,
        response
    });
};