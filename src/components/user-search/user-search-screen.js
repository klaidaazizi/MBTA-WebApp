import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import './index.css';
import UserSearchBar from "./index";
import {useDispatch} from "react-redux";
import {changeHighlight} from "../../actions/nav-bar-action";

const UserSearchScreen = () => {
    const dispatch = useDispatch();
    changeHighlight(dispatch, 'search_users')
    return(
        <div className='mt-2'>
        <h6 className='text-center text-capitalize bg-warning p-2 text-white rounded-2'> Search MBTA User</h6>
        <div className='mt-5 p-3'>
            <UserSearchBar/>
        </div>
        </div>
    )

}

export default UserSearchScreen;