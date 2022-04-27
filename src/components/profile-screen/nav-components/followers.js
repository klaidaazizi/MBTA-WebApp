import {findAllUserFollowers} from "../../../actions/follow-actions";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {unfollowUser} from "../../../services/follow-service";
import FollowersList from "./followers-list";

const Followers = ({userProfile}) => {
    const params = useParams();
    const followers = useSelector(state => state.followers)
    const dispatch = useDispatch();

    let user = "me";
    if(params.username){
        user = userProfile._id;
    }
    useEffect( async ()=> {
            await findAllUserFollowers(dispatch,user)
        },
        []);

    const removeFollow = (fid) => unfollowUser(fid).then(()=> findAllUserFollowers(dispatch, user));

    return(
        <FollowersList follows={followers}
                       removeFollow={removeFollow}
                       user={user}
        />
    );
}
export default Followers;