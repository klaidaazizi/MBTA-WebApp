import React, {useEffect, useState} from "react";
import {Link, Route, Routes, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findAStopById} from "../../actions/search-action";
import UsersWhoPinnedStops from "./users-who-pinned";
import "../user-search/index.css"
import {findAllUsersWhoPinnedStop} from "../../actions/pinned-stops-action";
import UsersWhoPinned from "./users-who-pinned-stops-list";


const SearchStopDetails = () => {

    const dispatch = useDispatch();
    const singleStop = useSelector(state => state.singleStop);
    const usersWhoPinnedStops = useSelector(state => state.usersWhoPinnedStops);
    const navigate = useNavigate();
    const params = useParams();
    const stopId = params.stopId;

    const findParentStopId = (singleStop) => {
        if(singleStop.relationships && singleStop.relationships.parent_station && singleStop.relationships.parent_station.data && singleStop.relationships.parent_station.data.id !== null) {
            return singleStop.relationships.parent_station.data.id;
        }
        else{
            return singleStop.id;
        }
        return "";
    }

    useEffect( () => {
             findAStopById(dispatch, stopId)
        }
        ,
        []);

    useEffect( () => {
            findAllUsersWhoPinnedStop(dispatch, findParentStopId(singleStop));
        }
        ,
        [singleStop]);


    const goBack = () => {
        navigate('/search');
    }

    const vehicle = (number) => {
        if(number === 0 || number === 1 || number === 2){
            return "Train";
        }
        if(number === 3){
            return "Bus";
        }
        if(number === 4){
            return "Ferry";
        }
        return "";
    }

    const reload = () => {
        window.location.reload();
    }



    return(
        <>
        <div>
            <ul className='list-group'>
                <li className="list-group-item ">
                    <div className=' container '>
                        <span className=' row text-center'>
                          <div className='col-8'>
                               <span className="col-6 btn back-button-transit-stop float-start"
                                     onClick={goBack}>
                                                 Back
                               </span>
                                                  </div>

                            {singleStop.relationships && singleStop.relationships.parent_station && singleStop.relationships.parent_station.data && singleStop.relationships.parent_station.data.id ?
                                <div className='col-4'>

                                <Link to={`/search/details/${singleStop.relationships.parent_station.data.id}/users-pinned`}>
                                    <span className=" btn btn-success " >
                                    View Users Who Pinned This Stop
                                    </span>
                                </Link>
                                </div>

                                :
                                    <div className='col-4'>

                                    <Link to={`/search/details/${singleStop.id}/users-pinned`}>
                                    <span className=" btn btn-success ">
                                    View Users Who Pinned This Stop
                                    </span>
                                    </Link>
                                    </div>

                            }
                            <div>
                                <img className="stop-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydZELE8FuIKGERoONJbfyqRrhpk6o_98KJA&usqp=CAU"/>
                            </div>

                        </span>
                    </div>
                </li>
                <li className="transit-stop-no-list ">

                    <div className="list-group-item">
                            <div className='row mt-1'>
                        <span className="fw-bold text-black h4   ">
                            {singleStop.attributes && singleStop.attributes.name ? `Stop Name: ${singleStop.attributes.name}`: '' }
                            <br/>
                                                            <br/>
                            {singleStop.attributes && singleStop.attributes.address ? `Address: ${singleStop.attributes.address}`: `Address: N/A` }
                            <br/>
                                                            <br/>
                            {singleStop.attributes && singleStop.attributes.municipality ? `Municipality: ${singleStop.attributes.municipality}`: `Municipality: Unknown` }
                           <br/>
                                                            <br/>

                            {singleStop.attributes && singleStop.attributes.description ? `Description: ${singleStop.attributes.description}`: `Description: N/A` }
                            <br/>
                                                            <br/>

                            {singleStop.attributes && singleStop.attributes.wheelchair_boarding === 1 ? 'Wheelchair Boarding: Yes': `Wheelchair Boarding: No` }
                            <br/>
                                                            <br/>

                            {singleStop.attributes && singleStop.attributes.vehicle_type && singleStop.attributes.vehicle_type !== null ? `Vehicle Type: ${vehicle(singleStop.attributes.vehicle_type)}`: `Vehicle Type: Information available upon arrival` }
                            <br/>
                                                            <br/>
                        </span>
                            </div>
                        </div>
                </li>
            </ul>
        </div>

            <div>
                <UsersWhoPinned users={usersWhoPinnedStops}></UsersWhoPinned>
                {/*<UsersWhoPinnedStops usersWhoPinnedStops={usersWhoPinnedStops}></UsersWhoPinnedStops>*/}
                {/*<UsersWhoPinnedStops parentStopId={findParentStopId(singleStop)}></UsersWhoPinnedStops>*/}
            </div>

        </>
    )
};

export default SearchStopDetails;