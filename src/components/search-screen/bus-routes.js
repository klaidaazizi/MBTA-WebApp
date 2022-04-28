import React, {useEffect} from "react";
import BusRouteItem from "./bus-route-item";
import {useDispatch, useSelector} from "react-redux";
import {findAllBusRoutes} from "../../actions/search-action";
import {Link} from "react-router-dom";
import './search.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BusRoutes = () => {
    const busRoutes = useSelector(state => state.busRoutes);
    const dispatch = useDispatch();
    useEffect(()=> findAllBusRoutes(dispatch),
        []);
    return(
        <div>
            <ul className='list-group'>
                <li className=' list-group-item fw-bold text-danger back-button-and-title-rt-route'>
                    <Link to="/home" className="-search-main-buttons-text btn btn-lg btn-dark">
                        Back
                    </Link>
                    <span className="bus-routes-title d-md-none"><FontAwesomeIcon icon="fa-solid fa-bus" className="fa-xl" /></span>
                    <span className="bus-routes-title">Bus Routes</span></li>
                {busRoutes.map(
                    route => {
                        return(<BusRouteItem key={route.id}
                                                      busRoute={route}/>)
                    }
                )}
            </ul>
        </div>
    )
};
export default BusRoutes;