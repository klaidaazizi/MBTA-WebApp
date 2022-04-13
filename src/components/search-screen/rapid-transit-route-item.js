import React from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import RapidRouteStops from "./rapid-transit-route-stops";
import './search.css';


const RapidTransitRouteItem = ({rtRoute}) => {
    const navigate = useNavigate();
    console.log(rtRoute)
    return(
        <div>
            <li className='list-group-item rt-route-color '>
                <div className='row ' >
            {/*<div className='row' onClick={() => navigate(`/rapid-transit/${rtRoute.id}`)}>*/}
            {/*    <Route path={`/search/rapid-transit/${rtRoute.id}`} className="line-ends-links "*/}
            {/*           element={<Login/>}>*/}
            {/*    <Link to={`/search/rapid-transit/${rtRoute.id}`} className="line-ends-links" element={<FerryRoutes/>}>*/}
                    <Link to={`/search/rapid-transit/${rtRoute.id}`} className="line-ends-links">
                          {/*element={<RapidRouteStops routeId={rtRoute.id}/>}*/}
                    <span className="fw-bold rapid-transit-route-id">{rtRoute.attributes.long_name}</span>
                    <div className="rt-route-text-alignment">
                        <div>
                <span className='col-6  rt-route-test-color'>{rtRoute.attributes.direction_destinations[0]}</span>
                        </div>
                        <div>
                <span className='col-6  rt-route-test-color'>{rtRoute.attributes.direction_destinations[1]}</span>
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

export default RapidTransitRouteItem;