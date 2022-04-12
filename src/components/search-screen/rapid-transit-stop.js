import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import './search.css';


const RapidTransitStop = () => {
    const navigate = useNavigate();
    const location = useLocation().pathname.split("/");
    const newLocation = location.filter(element => element != "");
    const stopId = newLocation[newLocation.length-1];

    return(
        <div>
            <li className='list-group-item rt-route-color'>
                <div className='row ' >
                    <div className="back-button-and-title-rt-route">
                        <button id="buttonBackToSearchMain" type="button" className=" button-sizing btn  -search-main-buttons-text"
                                onClick={() => navigate(-1)}>
                            Back
                        </button>
                        <span className="fw-bold commuter-rail-route-stop">
                            {stopId}
                        </span>
                        <div>
                            <i className="fa fa-star fa-3x"></i>
                        </div>
                    </div>
                    <div className="rt-route-text-alignment">
                        <div>
                            <span className='col-6 rt-route-test-color'>Inbound Arrivals</span>
                        </div>
                        <div>
                            <span className='col-6 rt-route-test-color'>Outbound Arrivals</span>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
};

export default RapidTransitStop;