import React from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import './search.css';


const FerryRouteItem = ({ferryRoute}) => {
    const routeName = ferryRoute.attributes.long_name.replace(/[^A-Za-z0-9_'()\/\@-]/g,"_").replace('/', "*");

    return(
        <div>
            <li className='list-group-item ferry-route-color '>
                <div className='row ' >
                    <Link to={`/home/ferry/${ferryRoute.id}/${routeName}`} className="line-ends-links ">
                        <span className="fw-bold rapid-transit-route-id">{ferryRoute.attributes.long_name}</span>
                        <div className="rt-route-text-alignment">
                            <div>
                                <span className='col-6  rt-route-test-color'>{ferryRoute.attributes.direction_destinations[0]}</span>
                            </div>
                            <div>
                                <span className='col-6  rt-route-test-color'>{ferryRoute.attributes.direction_destinations[1]}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </li>
        </div>
    )
};

export default FerryRouteItem;