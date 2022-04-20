import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import "./nav-components.css";
import "../../search-screen/search.css";
import * as service from "../../../services/authentication-service";
import {findAlertsByStop} from "../../../actions/alerts-action";
import {pinStop} from "../../../services/pinned-stop-service";

const StopUnit = ({unpinStop, stop}) => {
    const routeType = stop.routeType;
    const stopName = stop.stopName.replace("*","/");
    const routeName = stop.routeName.replace("*","/");
    const routeNameForNavigation = stop.routeName.replace(/ /g, '_');
    const stopNameForNavigation =  stop.stopName.replace(/ /g, '_');

    // let backgroundColor;
    // if(routeType === 'rapid-transit') {
    //     backgroundColor = 'rt-route-color';
    // } else if (routeType === 'bus') {
    //     backgroundColor = 'bus-route-color';
    // } else if (routeType === 'commuter-rail') {
    //     backgroundColor = 'cr-color';
    // } else if (routeType === 'ferry') {
    //     backgroundColor = 'ferry-route-color';
    // }

    let backgroundColor = 'white';


    return(
        <div>
            <li className={`list-group-item ${backgroundColor}`}>
                <Link to={`/search/${routeType}/${stop.routeId}/${routeNameForNavigation}/stop/${stop.stopId}/${stopNameForNavigation}`} className="line-ends-links" >
                    <span className=''>
                            <span className="col-3 btn  btn-warning float-start">
                                    See Next Arrivals
                            </span>
                    </span>
                </Link>
                <span className=''>
                            <span onClick={() => unpinStop(stop._id)} className="col-3 btn  btn-warning float-end">
                                    UnPin Stop
                            </span>
                </span>
                <br/>
                <br/>
                <div className=' ' >
                    <div className='row'>
                        <span className="fw-bold stop-unit  ">
                            Route: {routeName}
                            <br/>
                            Your Stop: {stopName}
                        </span>
                    </div>
                </div>
            </li>
        </div>


    )
};

export default StopUnit;