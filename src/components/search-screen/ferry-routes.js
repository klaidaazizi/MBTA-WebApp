import React, {useEffect} from "react";
import FerryRouteItem from "./ferry-route-item";
import {useDispatch, useSelector} from "react-redux";
import {findAllFerryRoutes} from "../../actions/search-action";
import {Link} from "react-router-dom";
import './search.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const FerryRoutes = () => {
    const ferryRoutes = useSelector(state => state.ferryRoutes);

    const dispatch = useDispatch();
    useEffect(()=> findAllFerryRoutes(dispatch),
        []);
    return(
        <div>
            <ul className='list-group'>
                <li className=' list-group-item fw-bold text-danger back-button-and-title-rt-route'>
                    <Link to="/home" className="-search-main-buttons-text btn btn-lg btn-dark">
                        Back
                    </Link>
                    <span className="ferry-routes-title d-md-none"><FontAwesomeIcon icon="fa-solid fa-ferry" className="fa-xl" /></span>
                    <span className="ferry-routes-title d-md-block d-none">Ferry Routes</span></li>
                {ferryRoutes.map(
                    route => {
                        return(<FerryRouteItem key={route.id}
                                                      ferryRoute={route}/>)
                    }
                )}
            </ul>
        </div>
    )
};
export default FerryRoutes;