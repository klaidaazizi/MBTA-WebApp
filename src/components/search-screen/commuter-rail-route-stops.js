import React, {useEffect} from "react";
import CommuterRailRouteStopsItem from "./commuter-rail-route-stops-item";
import {useDispatch, useSelector} from "react-redux";
import {findRapidTransitRouteAllStops} from "../../actions/search-action";
import {Link, useLocation, useParams} from "react-router-dom";
import './search.css';


const CommuterRailRouteStops = () => {

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
                    <button id="buttonBackToSearchMain" type="button" className=" button-sizing btn  ">
                        <Link to={`/home/commuter-rail`} className="-search-main-buttons-text">Back</Link>
                    </button>
                    {/*<span className="commuter-rail-routes-title">Commuter Rail</span>*/}

                <span className="commuter-rail-routes-title">{routeNameForStopsList} Stops</span>
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