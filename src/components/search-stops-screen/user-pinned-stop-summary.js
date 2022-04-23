import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
// import "./nav-components.css";
// import "../../search-screen/search.css";

const UserUnit = ({user}) => {


    return(
        <div>
            <li className='list-group-item'>
                <Link to={`/profile/${user._id}`} className="line-ends-links" >
                    <span className=''>
                            <span className="col-3 btn  btn-warning float-start">
                                    See User Profile
                            </span>
                    </span>
                </Link>
            </li>
        </div>


    )
};

export default UserUnit;