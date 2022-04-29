import React, {useEffect} from "react";
import BusRouteStopsItem from "./bus-route-stops-item";
import {useDispatch, useSelector} from "react-redux";
import {findRapidTransitRouteAllStops} from "../../actions/search-action";
import {Link, useParams} from "react-router-dom";
import './search.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const BusRouteStops = () => {
    const params = useParams();
    const routeId2 = params.routeId;
    const routeName = params.routeName;
    const routeNameForStopsList = routeName.replace(/_/g," ").replace("*","/");


    const rapidRouteStops = useSelector(state => state.rapidRouteStops);

    const dispatch = useDispatch();
    useEffect(() => findRapidTransitRouteAllStops(dispatch, routeId2),
        []);

    return(
        <div>
            <ul className='list-group'>
                <li className=' list-group-item fw-bold back-button-and-title-rt-route'>
                    <Link to="/home/bus" className="-search-main-buttons-text btn btn-lg btn-dark">
                        Back
                    </Link>
                    <span className="bus-routes-title d-md-none"><FontAwesomeIcon icon="fa-solid fa-bus" className="fa-xl" /></span>
                    <span className="bus-routes-title-smaller d-xxl-none d-xl-block  d-lg-block d-md-block  d-none">Bus Route {routeNameForStopsList} Stops</span>
                    <span className="bus-routes-title d-xxl-block d-none">Bus Route {routeNameForStopsList} Stops</span>
                </li>
                {rapidRouteStops.map(
                    rapidRouteStop => {
                        return(<BusRouteStopsItem key={rapidRouteStop.id}
                                                           rapidRouteStop={rapidRouteStop} routeId2={routeId2}/>)
                    }
                )}
            </ul>
        </div>
    )
};
export default BusRouteStops;