import {findAllFollowsByUser, findAllUserFollowers} from "../../../actions/follow-actions";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Follow from "./follow-unit";

const Followers = () => {
    const followers = useSelector(state => state.followers)
    const dispatch = useDispatch();
    useEffect( ()=> findAllUserFollowers(dispatch,"me"),
        []);

    return(
        <div>
            <ul className=" list-group">
                {
                    followers.map && followers.map(follow => {
                        return (
                            <Follow key={follow._id}
                                    follow={follow}/>

                        );
                    })
                }
            </ul>
        </div>
    )
}
export default Followers;