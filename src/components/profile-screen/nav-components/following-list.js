import {findAllFollowsByUser} from "../../../actions/follow-actions";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Follow from "./follow-unit";
import {useParams} from "react-router-dom";
import {unfollowUser} from "../../../services/follow-service";

const Following = ({profile}) => {
    const params = useParams();
    const following = useSelector(state => state.following)
    const dispatch = useDispatch();
    let user = "me";
    if(params.username){
        user = profile._id;
    }
    useEffect( async ()=> await findAllFollowsByUser(dispatch,user),
        []);
    const unfollow = (fid) => unfollowUser(fid).then(findAllFollowsByUser(dispatch, user));
    console.log(profile, "profile in following")
    console.log(following, " following list")

    return(
        <div>
            <ul className=" list-group">
                {
                    following.map && following.map(follow => {
                        return (
                            <Follow key={follow._id}
                                    follow={follow}
                                    unfollow={unfollow}/>
                        );
                    })
                }
            </ul>
        </div>
    )
}
export default Following;