import React, {useEffect} from "react";
import BusRouteItem from "./bus-route-item";
import {useDispatch, useSelector} from "react-redux";
import {findAllBusRoutes} from "../../actions/search-action";
import {Link} from "react-router-dom";
import './search.css';

const BusRoutes = () => {
    const busRoutes = useSelector(state => state.busRoutes);
    const dispatch = useDispatch();
    useEffect(()=> findAllBusRoutes(dispatch),
        []);
    return(
        <div>
            <ul className='list-group'>
                <li className=' list-group-item fw-bold text-danger back-button-and-title-rt-route'>
                    <button id="buttonBackToSearchMain" type="button" className=" button-sizing btn btn-danger ">
                        <Link to="/search" className="-search-main-buttons-text">Back</Link>
                    </button>
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