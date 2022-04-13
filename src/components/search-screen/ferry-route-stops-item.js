import {Link} from "react-router-dom";
import './search.css';
import React from "react";

const FerryRouteStopsItem = ({rapidRouteStop}) => {
    const rapidRouteStopName = rapidRouteStop.attributes.name.replace(/[^A-Za-z0-9_'()\/\@-]/g,"_").replace('/', "*");

    return(
        <div>
            <li className="list-group-item ferry-route-color">
                <div className='row ' >
                    <Link to={`/search/ferry/route/stop/detail/${rapidRouteStop.id}/${rapidRouteStopName}`} className="line-ends-links" >
                        <span className="fw-bold route-stop-id">{rapidRouteStop.attributes.name}</span>
                    </Link>
                </div>
            </li>
        </div>
    )
};
export default FerryRouteStopsItem;