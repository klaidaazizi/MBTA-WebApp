import React, {useEffect} from "react";
import RapidTransitRouteStopsItem from "./rapid-transit-route-stops-item";
import {useDispatch, useSelector} from "react-redux";
import {findRapidTransitRouteAllStops} from "../../actions/search-action";
import {Link, useParams} from "react-router-dom";
import './search.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const RapidRouteStops = () => {
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
                <li className=' list-group-item fw-bold text-danger back-button-and-title-rt-route'>
                    <Link to="/home/rapid-transit" className="-search-main-buttons-text btn btn-lg btn-dark">
                        Back
                    </Link>
                    <span className="rapid-transit-routes-title d-md-none"> <FontAwesomeIcon icon="fa-solid fa-train" className="fa-xl"/></span>
                    <span className="rapid-transit-routes-title-smaller d-xxl-none d-xl-block  d-lg-block d-md-block  d-none"> {routeNameForStopsList} Stops</span>
                    <span className="rapid-transit-routes-title d-xxl-block d-none">{routeNameForStopsList} Stops</span></li>
                {rapidRouteStops.map(
                    rapidRouteStop => {
                        return(<RapidTransitRouteStopsItem key={rapidRouteStop.id} rapidRouteStop={rapidRouteStop}/>)
                    }
                )}
            </ul>
        </div>
    )
};

export default RapidRouteStops;