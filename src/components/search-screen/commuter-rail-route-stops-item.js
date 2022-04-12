import React from "react";
import {Link} from "react-router-dom";
import './search.css';

const CommuterRailRouteStopsItem = ({rapidRouteStop}) => {
    return(
        <div>
            <li className='list-group-item cr-color '>
                <div className='row'>
                    <Link to={`/search/commuter-rail/route/stop/detail/${rapidRouteStop.id}`} className="line-ends-links" >
                    <span className="fw-bold route-stop-id">{rapidRouteStop.attributes.name}</span>
                    </Link>
                </div>
            </li>
        </div>
    )
};
export default CommuterRailRouteStopsItem;