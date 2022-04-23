import {useEffect, useState} from "react";
import UsersWhoPinned from "./users-who-pinned-stops-list";
import {useDispatch, useSelector} from "react-redux";
//import {findAllUsersWhoPinnedStop} from "../../actions/pinned-stops-action";
import {findAllUsersWhoPinnedStop} from "../../services/pinned-stop-service";
import {useParams} from "react-router-dom";


const UsersWhoPinnedStops = () => {
    const usersWhoPinnedStops = useSelector(state => state.usersWhoPinnedStops);
    const params = useParams();
    const stopId = params.stopId;
    console.log(params.stopId)
    const dispatch = useDispatch();
    useEffect(()=> findAllUsersWhoPinnedStop(dispatch, params.stopId),
        []);
    // useEffect(()=> findAllUsersWhoPinnedStop(dispatch, stopId),
    //     []);
    // const [users, setUsers] = useState([]);
    // useEffect( () => {
    //         findAllUsersWhoPinnedStop(stopId).then((users) => setUsers(users));
    // , []}
    console.log(findAllUsersWhoPinnedStop(stopId), "zebra")
    //const unPinStop = (pid) => unpinStop(pid).then(findAllUsersWhoPinnedStop(dispatch, "me"));

    // const [stops, setStops] = useState([]);
    //
    // const findMyStops = () => {
    //     findAllPinnedStopsByUser("me").then((stops) => setStops(stops));
    // };
    // useEffect( () => findMyStops, []);
    // const unPinStop = (pid) => unpinStop(pid).then(findMyStops);
    // console.log(findMyStops())
    return(
        <UsersWhoPinned users={usersWhoPinnedStops}/>
    );
};

export default UsersWhoPinnedStops;


