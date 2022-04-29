import React, {useEffect, useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import './search.css';
import {useDispatch, useSelector} from "react-redux";
import {conductRoute} from "../../actions/conducted-routes-action";


const CommuterRailRouteItem = ({crRoute}) => {
    const routeName = crRoute.attributes.long_name.replace(/[^A-Za-z0-9_'()\/\@-]/g,"_").replace('/', "*");
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn)
    const user = useSelector(state => state.sessionReducer.profileData)
    const dispatch = useDispatch();

    return(
        <div>
            <li className='list-group-item cr-color '>
                <div className='row ' >
                    <Link to={`/home/commuter-rail/${crRoute.id}/${routeName}`} className="line-ends-links ">
                        {loggedIn === true && user.userRole === "Conductor" ?
                            <div className='text-center'>
                                <span className="fw-bold rapid-transit-route-id">{crRoute.attributes.long_name}</span>
                                <span onClick={() => conductRoute(dispatch, user._id,`/home/commuter-rail/${crRoute.id}/${routeName}`)} className="col-4 btn btn-light">
                                                 Conduct This Route, {`${user.username}`}!
                                </span>
                            </div>
                            :
                            <span className="fw-bold route-title-id-cr ">{crRoute.attributes.long_name}</span>

                            // <span className="fw-bold route-title-id-cr rapid-transit-route-id">{crRoute.attributes.long_name}</span>
                        }
                        {/*<div className="rt-route-text-alignment">*/}
                        {/*    <div>*/}
                        {/*        <span className='col-6  rt-route-test-color'>{crRoute.attributes.direction_destinations[0]}</span>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <span className='col-6  rt-route-test-color'>{crRoute.attributes.direction_destinations[1]}</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </Link>
                </div>
            </li>
        </div>
    )
};

export default CommuterRailRouteItem;