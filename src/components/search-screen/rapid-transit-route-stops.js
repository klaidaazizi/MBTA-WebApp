import React, {useEffect} from "react";
import RapidTransitRouteStopsItem from "./rapid-transit-route-stops-item";
import {useDispatch, useSelector} from "react-redux";
import {findRapidTransitRouteAllStops} from "../../actions/search-action";
import {Link, useLocation} from "react-router-dom";
import './search.css';

const RapidRouteStops = () => {

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

    return(
        <div>
            <ul className='list-group'>
                <li className=' list-group-item fw-bold text-danger back-button-and-title-rt-route'>
                    <button id="buttonBackToSearchMain" type="button" className=" button-sizing btn btn-danger ">
                        <Link to={`/search/rapid-transit`} className="-search-main-buttons-text">Back</Link>
                    </button>
                    <span className="rapid-transit-routes-title">{routeId2} Stops</span></li>
                {rapidRouteStops.map(
                    rapidRouteStop => {
                        return(<RapidTransitRouteStopsItem key={rapidRouteStop.id}
                                                           rapidRouteStop={rapidRouteStop} routeId2={routeId2}/>)
                    }
                )}
            </ul>
        </div>
    )
};
export default RapidRouteStops;