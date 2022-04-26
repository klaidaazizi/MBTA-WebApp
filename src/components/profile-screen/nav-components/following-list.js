import {findAllFollowsByUser} from "../../../actions/follow-actions";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Follow from "./follow-unit";
import {useParams} from "react-router-dom";

const Following = ({profile}) => {
    const params = useParams();
    const following = useSelector(state => state.following)
    const dispatch = useDispatch();
    let user = "me";
    if(params.username){
        user = profile._id;
    }
    useEffect( ()=>findAllFollowsByUser(dispatch,user),
        []);

    return(
        <div>
            <ul className=" list-group">
                {
                    following.map && following.map(follow => {
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
export default Following;