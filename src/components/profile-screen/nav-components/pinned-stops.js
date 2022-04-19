import {useEffect, useState} from "react";
import Stops from "./pinned-stops-list";
import {unpinStop} from "../../../services/pinned-stop-service";
import {useDispatch, useSelector} from "react-redux";
import {findAllPinnedStopsByUser} from "../../../actions/pinned-stops-action";


const PinnedStops = () => {
    const pinnedStops = useSelector(state => state.pinnedStops);
    const dispatch = useDispatch();
    useEffect(()=> findAllPinnedStopsByUser(dispatch, "me"),
        []);
    const unPinStop = (pid) => unpinStop(pid).then(findAllPinnedStopsByUser(dispatch, "me"));

    // const [stops, setStops] = useState([]);
    //
    // const findMyStops = () => {
    //     findAllPinnedStopsByUser("me").then((stops) => setStops(stops));
    // };
    // useEffect( () => findMyStops, []);
    // const unPinStop = (pid) => unpinStop(pid).then(findMyStops);
    // console.log(findMyStops())
    return(
        <Stops stops={pinnedStops} unpinStop={unPinStop}/>
    );
};

export default PinnedStops;


