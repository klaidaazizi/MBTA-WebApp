import {findAllFollowsByUser} from "../../../actions/follow-actions";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Follow from "./follow-unit";

const Following = () => {
    const following = useSelector(state => state.following)
    const dispatch = useDispatch();
    useEffect( ()=> findAllFollowsByUser(dispatch,"me"),
        []);

    return(
        <div>
            <ul className=" list-group">
                {
                    following.map && following.map(follow => {
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
export default Following;