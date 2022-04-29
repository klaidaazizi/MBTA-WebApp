import React from "react";
import {Link} from "react-router-dom";
import './search.css';
import {useDispatch, useSelector} from "react-redux";
import {conductRoute} from "../../actions/conducted-routes-action";


const FerryRouteItem = ({ferryRoute}) => {
    const routeName = ferryRoute.attributes.long_name.replace(/[^A-Za-z0-9_'()\/\@-]/g,"_").replace('/', "*");
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn)
    const user = useSelector(state => state.sessionReducer.profileData)
    const dispatch = useDispatch();

    return(
        <div>
            <li className='list-group-item ferry-route-color '>
                <div className='row ' >
                    <Link to={`/home/ferry/${ferryRoute.id}/${routeName}`} className="line-ends-links ">
                        {loggedIn === true && user.userRole === "Conductor" ?
                            <>
                                <div className='text-center'>
                                    <span className="fw-bold rapid-transit-route-id">{ferryRoute.attributes.long_name}</span>
                                    <span onClick={() => conductRoute(dispatch, user._id, `/home/ferry/${ferryRoute.id}/${routeName}`)} className="btn btn-light">
                                                     Conduct This Route, {`${user.username}`}!
                                    </span>
                                </div>
                            </>
                            :
                            <span className="fw-bold rapid-transit-route-id">{ferryRoute.attributes.long_name}</span>
                        }
                    </Link>
                </div>
            </li>
        </div>
    )
};

export default FerryRouteItem;