import React, {useEffect} from "react";
import RapidTransitRouteItem from "./rapid-transit-route-item";
import {useDispatch, useSelector} from "react-redux";
import {findAllRapidTransitRoutes} from "../../actions/search-action";
import {Link} from "react-router-dom";
import './search.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const RapidTransitRoutes = () => {
    const rtRoutes = useSelector(state => state.rtRoutes);
    const dispatch = useDispatch();
    useEffect(()=> findAllRapidTransitRoutes(dispatch),
        []);
    return(
        <div>
        <ul className='list-group'>
            <li className=' list-group-item fw-bold text-danger back-button-and-title-rt-route'>
                <Link to="/home" className="-search-main-buttons-text btn btn-lg btn-dark">
                    Back
                </Link>
                <span className="rapid-transit-routes-title d-md-none"> <FontAwesomeIcon icon="fa-solid fa-train" className="fa-xl"/></span>
                <span className="rapid-transit-routes-title d-md-block d-none">Rapid Transit Routes</span></li>
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