import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findAStopById} from "../../actions/search-action";


const SearchStopDetails = () => {

    const dispatch = useDispatch();
    const singleStop = useSelector(state => state.singleStop);
    const navigate = useNavigate();
    const params = useParams();
    const stopId = params.stopId;
    console.log(stopId)

    // const isSingleStopNull = (singleStop) => {
    //     console.log(singleStop === null + " null")
    //     console.log(singleStop === undefined + " undefined")
    //     console.log(singleStop === null || singleStop === undefined + " both")
    //
    //     return singleStop === null || singleStop === undefined;
    // }


    useEffect(() => findAStopById(dispatch, stopId),
        []);

    console.log(singleStop)


    const goBack = () => {
        navigate('/search');
        //navigate(-1);
    }

    // const goToParentStation = (text) => {
    //     navigate(`/search/details/${text}`);
    // }

    const goToParentStation = () => {
        window.location.reload();
        return false;
    }

    return(
        <div>
            <ul className='list-group'>
                <li className="list-group-item ">
                    <div className=' container'>
                        <span className=' row text-center'>
                          <div className='col-6'>
                               <span className="col-6 btn back-button-transit-stop float-start"
                                     onClick={goBack}>
                                                 Back
                               </span>
                                                  </div>

                            {singleStop.relationships && singleStop.relationships.parent_station && singleStop.relationships.parent_station.data && singleStop.relationships.parent_station.data.id ?
                                <div className='col-6'>

                                <Link to={`/search/users-pinned/${singleStop.relationships.parent_station.data.id}`}>
                                    <span className="col-12 btn btn-success float-end">
                                    View Users Who Pinned This Stop
                                    </span>
                                </Link>
                                </div>

                                :
                                    <div className='col-6'>

                                    <Link to={`/search/users-pinned/${singleStop.id}`}>
                                    <span className="col-12 btn btn-success float-end">
                                    View Users Who Pinned This Stop
                                    </span>
                                    </Link>
                                    </div>

                            }

                            {/*{singleStop.relationships && singleStop.relationships.parent_station && singleStop.relationships.parent_station.data && singleStop.relationships.parent_station.data.id ? */}
                            {/*//      <div className='col-6'>*/}
                            {/*//                  <span className="col-6 btn btn-success float-end"*/}
                            {/*//                        onClick={goToParentStation(singleStop.relationships.parent_station.data.id)}>*/}
                            {/*//                      Parent Station*/}
                            {/*//                  </span>*/}
                            {/*//     <Link to={`/search/details/${singleStop.relationships.parent_station.data.id}`}  onClick={goToParentStation}>*/}
                            {/*// <span className="col-6 btn btn-success float-end">*/}
                            {/*//         Parent Station*/}
                            {/*// </span>*/}
                            {/*//     </Link>*/}
                            {/*//  </div>*/}
                            {/*    : '' }*/}


                        </span>
                    </div>
                </li>
                <li className="transit-stop-no-list">

                    <div className={`list-group-item`}>
                        <div className='col-12' >
                            <div className='row mt-1'>
                        <span className="fw-bold text-black h3 col justify-content-center d-flex">
                            Stop Name:
                            {singleStop.attributes && singleStop.attributes.name ? singleStop.attributes.name: '' }
                                <br/>
                            {singleStop.attributes && singleStop.attributes.address ? `Stop Address: ${singleStop.attributes.address}`: '' }
                            <br/>
                            Stop Description:
                            {singleStop.attributes && singleStop.attributes.description ? singleStop.attributes.description: '' }
                            <br/>
                            {singleStop.attributes && singleStop.attributes.municipality ? singleStop.attributes.municipality: '' }
                            <br/>
                            {singleStop.attributes && singleStop.attributes.wheelchair_boarding ? singleStop.attributes.wheelchair_boarding: '' }
                            <br/>
                            {singleStop.attributes && singleStop.attributes.vehicle_type ? singleStop.attributes.vehicle_type: '' }
                            <br/>
                            {singleStop.relationships && singleStop.relationships.parent_station && singleStop.relationships.parent_station.data && singleStop.relationships.parent_station.data.id ? singleStop.relationships.parent_station.data.id: '' }
                            {/*{singleStop.relationships.parent_station.data.id}*/}
                            {/*/!*{isSingleStopNull({singleStop}) === false && singleStop.attributes && singleStop.relationships.parent_station.data?*!/*/}
                            {/*    <>*/}
                            {/*    </>*/}
                            {/*    : ''}*/}


                        </span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default SearchStopDetails;