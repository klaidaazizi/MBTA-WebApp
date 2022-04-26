import {findAllFollowsByUser, findAllUserFollowers} from "../../../actions/follow-actions";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Follow from "./follow-unit";
import {useParams} from "react-router-dom";

const Followers = (profile) => {
    const params = useParams();
    const followers = useSelector(state => state.followers)
    const dispatch = useDispatch();
    let user = "me";
    if(params.username){
        user = profile._id;
    }
    useEffect( ()=> findAllUserFollowers(dispatch,user),
        []);

    return(
        <div>
            <ul className=" list-group">
                {
                    followers.map && followers.map(follow => {
                        return (
                            <Follow key={follow._id}
                                    follow={follow}
                                    profile={user}/>

                        );
                    })
                }
            </ul>
        </div>
    )
}
export default Followers;