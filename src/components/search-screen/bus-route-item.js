import React from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import './search.css';


const BusRouteItem = ({busRoute}) => {
    return(
        <div>
            <li className='list-group-item bus-route-color '>
                <div className='row ' >
                    <Link to={`/search/bus/${busRoute.id}`} className="line-ends-links ">
                        <span className="fw-bold rapid-transit-route-id">{busRoute.attributes.short_name}</span>
                        <div className="rt-route-text-alignment">
                            <div>
                                <span className='col-6  rt-route-test-color'>{busRoute.attributes.direction_destinations[0]}</span>
                            </div>
                            <div>
                                <span className='col-6  rt-route-test-color'>{busRoute.attributes.direction_destinations[1]}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </li>
        </div>
    )
};

export default BusRouteItem;