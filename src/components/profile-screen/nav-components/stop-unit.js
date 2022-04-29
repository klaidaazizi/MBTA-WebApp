import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import "./nav-components.css";
import "../../search-screen/search.css";
import * as service from "../../../services/authentication-service";
import {findAlertsByStop} from "../../../actions/alerts-action";
import {pinStop} from "../../../services/pinned-stop-service";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StopUnit = ({unpinStop, stop, user}) => {
    //console.log(stop, user, "in stop unit")
    let routeType;
    let stopName;
    let routeName;
    let routeNameForNavigation;
    let stopNameForNavigation;

    if(stop.routeType && stop.stopName && stop.routeName){
        routeType = stop.routeType;
        stopName = stop.stopName.replace("*","/");
        routeName = stop.routeName.replace("*","/");
        routeNameForNavigation = stop.routeName.replace(/ /g, '_');
        stopNameForNavigation =  stop.stopName.replace(/ /g, '_');
    }


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
                {user === "me" ?
                    <>
                    <Link to={`/home/${routeType}/${stop.routeId}/${routeNameForNavigation}/stop/${stop.stopId}/${stopNameForNavigation}`} className="line-ends-links" >
                    <span className='btn btn-warning  float-start'>
                        {/*<span className="d-none d-md-inline ">Remove</span>*/}
                        <span className="d-xs-block d-md-none "><FontAwesomeIcon icon="fa-solid fa-eye"/></span>
                        <span className="col-3  d-none d-md-inline">See Next Arrivals</span>
                    </span>
                    </Link>
                        <span className=''>
                            <span onClick={() => unpinStop(stop._id)} className="col-3 btn  btn-warning float-end">
                                    UnPin Stop
                            </span>
                </span>
                    </>
                    : <Link to={`/home/${routeType}/${stop.routeId}/${routeNameForNavigation}/stop/${stop.stopId}/${stopNameForNavigation}`} className="line-ends-links" >
                    <span className='btn btn-warning  float-end'>
                        <span className="d-xs-block d-md-none "><FontAwesomeIcon icon="fa-solid fa-eye"/></span>
                        <span className="col-3 d-none d-md-inline">See Next Arrivals</span>
                            {/*<span className="col-3 btn  btn-warning float-end">*/}
                            {/*        See Next Arrivals*/}
                            {/*</span>*/}
                    </span>
                    </Link>
                }
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