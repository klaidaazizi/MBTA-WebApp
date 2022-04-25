import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {findAlertsByStop} from "../../actions/alerts-action";
import {pinStop} from "../../services/pinned-stop-service";
// import "./nav-components.css";
// import "../../search-screen/search.css";

const UserUnit = ({user}) => {

    return(
        <div>
            <li className='list-group-item'>
                <Link to={`/profile/${user.username}`} className="line-ends-links" >
                    <div className=' container'>
                                     <span className=' row text-center'>
                          <div className='col-12'>
                               <span className=''>
                            <span className="col-3 btn  btn-warning float-end">
                                    See User Profile
                            </span>
                                   <span className="fw-bold text-black h4">
                                        {user.name} -- @{user.username}
                            </span>
                        </span>
                          </div>

                                     </span>
                    </div>

                </Link>
            </li>
        </div>


    )
};

export default UserUnit;