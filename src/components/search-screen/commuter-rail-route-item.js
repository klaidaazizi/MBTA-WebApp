import React, {useEffect, useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import './search.css';
import {save} from "../../actions/auth-actions";
import {useDispatch, useSelector} from "react-redux";


const CommuterRailRouteItem = ({crRoute}) => {
    const routeName = crRoute.attributes.long_name.replace(/[^A-Za-z0-9_'()\/\@-]/g,"_").replace('/', "*");
    const navigate = useNavigate();
    const loggedIn = useSelector(state => state.sessionReducer.isLoggedIn)
    const user = useSelector(state => state.sessionReducer.profileData)
    const dispatch = useDispatch();
    const [conductor, setConductor] = useState({});

    useEffect(  () => {
        if(loggedIn){
            setConductor(user)
        }
    }, [loggedIn]);

    const saveProfile = () => {
        try {
            console.log(conductor)
            conductor.currentRouteConducting = `/home/commuter-rail/${crRoute.id}/${routeName}`;
            setConductor(conductor)
            console.log(conductor)
            save(dispatch, conductor).then(r => navigate(`/profile`));
        } catch (e){
            alert("Failed to update route!")
        }
    }

    return(
        <div>
            <li className='list-group-item cr-color '>
                <div className='row ' >
                    <Link to={`/home/commuter-rail/${crRoute.id}/${routeName}`} className="line-ends-links ">
                        {loggedIn === true && user.userRole === "Conductor" ?
                            <>
                                <span onClick={saveProfile} className="col-4 btn btn-light">
                                                 Conduct This Route, {`${user.name}`}!
                                </span>
                                <span className="fw-bold rapid-transit-route-id">{crRoute.attributes.long_name}</span>
                            </>
                            :
                            <span className="fw-bold rapid-transit-route-id">{crRoute.attributes.long_name}</span>
                        }
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
        </div>
    )
};

export default CommuterRailRouteItem;