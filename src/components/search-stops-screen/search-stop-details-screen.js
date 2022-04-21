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
    console.log(singleStop)

    // const isSingleStopNull = (singleStop) => {
    //     console.log(singleStop === null + " null")
    //     console.log(singleStop === undefined + " undefined")
    //     console.log(singleStop === null || singleStop === undefined + " both")
    //
    //     return singleStop === null || singleStop === undefined;
    // }


    useEffect(() => findAStopById(dispatch, stopId),
        []);


    const goBack = () => {
        navigate('/search');
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


                                         <div className='col-6'>
                                             <span className="col-6 btn btn-success float-end"
                                                   >
                                                 Parent Station
                                             </span>
                                         </div>
                        </span>
                    </div>
                </li>
                <li className="transit-stop-no-list">

                    <div className={`list-group-item`}>
                        <div className='col-12' >
                            <div className='row mt-1'>
                        <span className="fw-bold text-black h3 col justify-content-center d-flex">
                            {singleStop.id}
                            <br/>
                                {singleStop.attributes.name}
                                <br/>
                            {singleStop.attributes.description}
                            {/*<br/>*/}
                            {/*{singleStop.attributes.municipality}*/}
                            {/*<br/>*/}
                            {/*{singleStop.attributes.vehicle_type}*/}
                            {/*<br/>*/}
                            {/*{singleStop.attributes.wheelchair_boarding}*/}
                            {/*<br/>*/}
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