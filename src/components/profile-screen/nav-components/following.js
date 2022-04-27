import {findAllFollowsByUser, findAllUserFollowers} from "../../../actions/follow-actions";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {unfollowUser} from "../../../services/follow-service";
import FollowingList from "./following-list";

const Following = ({userProfile}) => {
    const params = useParams();
    const following = useSelector(state => state.following)
    const dispatch = useDispatch();

    let user = "me";
    if(params.username){
        user = userProfile._id;
    }
    useEffect( async ()=> {
        await findAllFollowsByUser(dispatch,user)
        },
        []);

    const removeFollow = (fid) => unfollowUser(fid).then(()=> findAllFollowsByUser(dispatch, user));

    return(
        <FollowingList follows={following}
                       removeFollow={removeFollow}
                       user={user}
                     />
    );
}
export default Following;