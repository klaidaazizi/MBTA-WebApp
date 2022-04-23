import React, {useEffect} from "react";
import CommuterRailRouteItem from "./commuter-rail-route-item";
import {useDispatch, useSelector} from "react-redux";
import {findAllCommuterRailRoutes} from "../../actions/search-action";
import {Link} from "react-router-dom";
import './search.css';

const CommuterRailRoutes = () => {
    const crRoutes = useSelector(state => state.crRoutes);

    const dispatch = useDispatch();
    useEffect(()=> findAllCommuterRailRoutes(dispatch),
        []);

    return(
        <div>
            <ul className='list-group'>
                <li className=' list-group-item fw-bold back-button-and-title-rt-route'>
                    <button id="buttonBackToSearchMain" type="button" className=" button-sizing btn btn-danger ">
                        <Link to="/home" className="-search-main-buttons-text">Back</Link>
                    </button>
                    <span className="commuter-rail-routes-title">Commuter Rail Routes</span></li>
                {crRoutes.map(
                    route => {
                        return(<CommuterRailRouteItem key={route.id}
                                                      crRoute={route}/>)
                    }
                )}
            </ul>
        </div>
    )
};
export default CommuterRailRoutes;