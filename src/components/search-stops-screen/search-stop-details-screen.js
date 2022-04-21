import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findStopById} from "../../actions/search-action";

const SearchStopDetails = () => {
    const dispatch = useDispatch();
    const singleStop = useSelector(state => state.singleStop);
    console.log(singleStop)
    const navigate = useNavigate();
    const params = useParams();
    const stopId = params.stopId;

    useEffect(() => {
            findStopById(dispatch, stopId);
            }
        , []);

    return(
        <div>
            <ul className='list-group'>
                <li className="list-group-item ">
                    <div className=' container'>
                        <span className=' row text-center'>
                          <div className='col-4'>
                               <span className="col-12 btn back-button-transit-stop"
                                     onClick={() => navigate(-1)}>
                                                 Back
                               </span>
                          </div>
                        </span>
                    </div>
                </li>
                <li className="transit-stop-no-list">

                    <div className={`list-group-item`}>
                        <div className='col-12' >
                            <div className='row mt-1'>
                        <span className="fw-bold text-light h3 col justify-content-center d-flex">
                            {singleStop.id}
                            {singleStop.attributes.name}
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