import React, {useEffect} from "react";
import FerryRouteStopsItem from "./ferry-route-stops-item";
import {useDispatch, useSelector} from "react-redux";
import {findRapidTransitRouteAllStops} from "../../actions/search-action";
import {Link, useLocation, useParams} from "react-router-dom";
import './search.css';


const FerryRouteStops = () => {

    const params = useParams();
    const routeId2 = params.routeId;
    const rapidRouteStops = useSelector(state => state.rapidRouteStops);

    const dispatch = useDispatch();
    console.log("heyo")
    console.log(rapidRouteStops)
    console.log("heyo")
    useEffect(() => findRapidTransitRouteAllStops(dispatch, routeId2),
        []);



    return(
        <div>
            <ul className='list-group'>
                <li className=' list-group-item fw-bold back-button-and-title-rt-route'>
                    <button id="buttonBackToSearchMain" type="button" className=" button-sizing btn  ">
                        <Link to="/search/ferry" className="-search-main-buttons-text">Back</Link>
                    </button>
                    <span className="ferry-routes-title">{routeId2} Stops</span></li>
                {rapidRouteStops.map(
                    rapidRouteStop => {
                        return(<FerryRouteStopsItem key={rapidRouteStop.id}
                                                  rapidRouteStop={rapidRouteStop} routeId2={routeId2}/>)
                    }
                )}
            </ul>
        </div>
    )
};
export default FerryRouteStops;