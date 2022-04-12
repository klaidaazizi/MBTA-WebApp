import React, {useEffect} from "react";
import CommuterRailRouteStopsItem from "./commuter-rail-route-stops-item";
import {useDispatch, useSelector} from "react-redux";
import {findRapidTransitRouteAllStops} from "../../actions/search-action";
import {Link, useLocation} from "react-router-dom";
import './search.css';


const CommuterRailRouteStops = () => {

    const location = useLocation().pathname.split("/");
    const newLocation = location.filter(element => element != "");
    const routeId2 = newLocation[newLocation.length-1];

    const rapidRouteStops = useSelector(state => state.rapidRouteStops);

    const dispatch = useDispatch();
    console.log("hi")
    console.log(rapidRouteStops)
    console.log("hi")
    useEffect(() => findRapidTransitRouteAllStops(dispatch, routeId2),
        []);
    //const rapidRouteStops = useSelector(state => state.rapidRouteStops);




    return(
        <div>
            <ul className='list-group'>
                <li className=' list-group-item fw-bold back-button-and-title-rt-route'>
                    <button id="buttonBackToSearchMain" type="button" className=" button-sizing btn  ">
                        <Link to={`/search/commuter-rail`} className="-search-main-buttons-text">Back</Link>
                    </button>
                    {/*<span className="commuter-rail-routes-title">Commuter Rail</span>*/}

                <span className="commuter-rail-routes-title">{routeId2} Stops</span>
                </li>
                {rapidRouteStops.map(
                    rapidRouteStop => {
                        return(<CommuterRailRouteStopsItem key={rapidRouteStop.id}
                                                           rapidRouteStop={rapidRouteStop} routeId2={routeId2}/>)
                    }
                )}
            </ul>
        </div>
    )
};
export default CommuterRailRouteStops;