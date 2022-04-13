import React, {useEffect} from "react";
import RapidTransitRouteItem from "./rapid-transit-route-item";
import {useDispatch, useSelector} from "react-redux";
import {findAllRapidTransitRoutes} from "../../actions/search-action";
import {Link} from "react-router-dom";
import './search.css';

const RapidTransitRoutes = () => {
    const rtRoutes = useSelector(state => state.rtRoutes);
    console.log(rtRoutes)
    const dispatch = useDispatch();
    useEffect(()=> findAllRapidTransitRoutes(dispatch),
        []);
    return(
        <div>
        <ul className='list-group'>
            <li className=' list-group-item fw-bold text-danger back-button-and-title-rt-route'>
                <button id="buttonBackToSearchMain" type="button" className=" button-sizing btn btn-danger ">
                    <Link to="/search" className="-search-main-buttons-text">Back</Link>
                </button>
                <span className="rapid-transit-routes-title">Rapid Transit Routes</span></li>
            {rtRoutes.map(
                route => {
                    return(<RapidTransitRouteItem key={route.id}
                                      rtRoute={route}/>)
                }
            )}
        </ul>
</div>
    )
};
export default RapidTransitRoutes;