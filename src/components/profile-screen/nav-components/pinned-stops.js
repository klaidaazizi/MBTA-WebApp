import {useEffect, useState} from "react";
import Stops from "./pinned-stops-list";
import {unpinStop} from "../../../services/pinned-stop-service";
import {useDispatch, useSelector} from "react-redux";
import {findAllPinnedStopsByUser} from "../../../actions/pinned-stops-action";
import {useParams} from "react-router-dom";

const PinnedStops = ({userProfile}) => {
    const params = useParams();

    const pinnedStops = useSelector(state => state.pinnedStops);
    const dispatch = useDispatch();

    let user = "me";
    if(params.username){
        user = userProfile._id;
    }
    useEffect(()=> findAllPinnedStopsByUser(dispatch, user),
        []);
    const unPinStop = (pid) => unpinStop(pid).then(findAllPinnedStopsByUser(dispatch, user));

    return(
        <Stops stops={pinnedStops} unpinStop={unPinStop} user={user}/>
    );
};

export default PinnedStops;


