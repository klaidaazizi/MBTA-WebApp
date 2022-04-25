import {findAllFollowsByUser} from "../../../actions/follow-actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const Following = () => {
    const following = useSelector(state => state.following)
    const dispatch = useDispatch();
    useEffect( ()=> findAllFollowsByUser(dispatch,"me"),
        []);

    return(
        <div>
            {following}
        </div>
    )
}
export default Following;