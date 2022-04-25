import React from "react";
import {Link} from "react-router-dom";
import './search.css';

const BusRouteStopsItem = ({rapidRouteStop}) => {
    const rapidRouteStopName = rapidRouteStop.attributes.name.replace(/[^A-Za-z0-9_'()\/\@-]/g,"_").replace('/', "*");

    return(
        <div>
            <li className='list-group-item bus-route-color '>
                <div className='row ' >
                    <Link to={`stop/${rapidRouteStop.id}/${rapidRouteStopName}`} className="line-ends-links" >
                        <span className="fw-bold route-stop-id">{rapidRouteStop.attributes.name}</span>
                    </Link>
                </div>
            </li>
        </div>
    )
};
export default BusRouteStopsItem;