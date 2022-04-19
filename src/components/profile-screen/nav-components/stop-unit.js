import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import * as service from "../../../services/authentication-service";

const StopUnit = ({unpinStop, stop}) => {
    // const navigate = useNavigate();
    // const params = useParams();
    // const stopId = params.stopId;
    // const routeId = params.routeId;
    // const location = useLocation().pathname.split("/");
    // const newLocation = location.filter(element => element != "");
    // const stopName = newLocation[newLocation.length-1];
    // const name = stopName.replace(/_/g," ").replace("*","/");

    return(
        <div>
            <li className='list-group-item rt-route-color'>
                <div className='col-12' >
                    <div className='row'>
                        <span className='col-12'>
                            <span onClick={() => unpinStop(stop._id)} className="col-3 btn  btn-warning float-end">
                                    UnPin Stop
                            </span>
                        </span>
                    </div>
                    <div className='row mt-1'>
                        <span className="fw-bold text-primary h3 col justify-content-center d-flex">
                            {stop.route} -- {stop.stop}
                        </span>
                    </div>
                </div>
            </li>
        </div>
    )
};

export default StopUnit;