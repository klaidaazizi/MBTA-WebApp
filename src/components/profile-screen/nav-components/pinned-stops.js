import {useEffect, useState} from "react";
import Stops from "./pinned-stops-list";
import {findAllPinnedStopsByUser, unpinStop} from "../../../services/pinned-stop-service";


const PinnedStops = () => {
    const [stops, setStops] = useState([]);
    const findMyStops = () => {
        findAllPinnedStopsByUser("me").then(stops => setStops(stops))
    };
    useEffect(findMyStops, []);
    const unPinStop = (pid) => unpinStop(pid).then(findMyStops);

    return(
        <Stops stops={stops} unpinStop={unPinStop}/>
    );
};

export default PinnedStops;



