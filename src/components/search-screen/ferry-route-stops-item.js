import {Link} from "react-router-dom";
import './search.css';
import React from "react";

const FerryRouteStopsItem = ({rapidRouteStop}) => {
    return(
        <div>
            <li className="list-group-item ferry-route-color">
                <div className='row ' >
                    <Link to={`stop/detail/${rapidRouteStop.id}`} className="line-ends-links" >
                        <span className="fw-bold route-stop-id">{rapidRouteStop.attributes.name}</span>
                    </Link>
                </div>
            </li>
        </div>
    )
};
export default FerryRouteStopsItem;