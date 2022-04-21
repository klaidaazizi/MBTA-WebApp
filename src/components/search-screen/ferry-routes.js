import React, {useEffect} from "react";
import FerryRouteItem from "./ferry-route-item";
import {useDispatch, useSelector} from "react-redux";
import {findAllFerryRoutes} from "../../actions/search-action";
import {Link} from "react-router-dom";
import './search.css';


const FerryRoutes = () => {
    const ferryRoutes = useSelector(state => state.ferryRoutes);

    const dispatch = useDispatch();
    useEffect(()=> findAllFerryRoutes(dispatch),
        []);
    return(
        <div>
            <ul className='list-group'>
                <li className=' list-group-item fw-bold text-danger back-button-and-title-rt-route'>
                    <button id="buttonBackToSearchMain" type="button" className=" button-sizing btn btn-danger ">
                        <Link to="/home" className="-search-main-buttons-text">Back</Link>
                    </button>
                    <span className="ferry-routes-title">Ferry Routes</span></li>
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