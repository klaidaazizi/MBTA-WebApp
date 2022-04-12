import React from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import './search.css';


const CommuterRailRouteItem = ({crRoute}) => {
    const navigate = useNavigate();

    return(
        <div>
            <li className='list-group-item cr-color '>
                <div className='row ' >
                    {/*<div className='row' onClick={() => navigate(`/rapid-transit/${rtRoute.id}`)}>*/}
                    <Link to={`/search/commuter-rail/${crRoute.id}`} className="line-ends-links ">
                        <span className="fw-bold rapid-transit-route-id">{crRoute.id}</span>
                        <div className="rt-route-text-alignment">
                            <div>
                                <span className='col-6  rt-route-test-color'>{crRoute.attributes.direction_destinations[0]}</span>
                            </div>
                            <div>
                                <span className='col-6  rt-route-test-color'>{crRoute.attributes.direction_destinations[1]}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </li>

            {/*<Routes>*/}
            {/*    <Route path="/Red" element={<RapidTransitRoutes/>}/>*/}
            {/*    /!*<Route path="/commuter-rail" element={</>}/>*!/*/}
            {/*    /!*<Route path="/bus" element={</>}/>*!/*/}
            {/*    /!*<Route path="/ferry" element={</>}/>*!/*/}
            {/*</Routes>*/}
        </div>

    )
};

export default CommuterRailRouteItem;