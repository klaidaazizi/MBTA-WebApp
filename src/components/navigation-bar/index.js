import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from "../../actions/auth-actions";

const NavigationBar = () => {
    const isLoggedIn = useSelector(state=> state.sessionReducer.isLoggedIn)
    const dispatch = useDispatch();

    return(
        <div className='list-group'>
            <Link to='/'
                  className={`list-group-item`}>
                <span><img className='img-fluid float-start' src="/images/teasy.png"/></span>
            </Link>
            <Link to='/'
                  className={`list-group-item`}>
                <span>
                    Home
                </span>
            </Link>
            {isLoggedIn ?
            <Link to='/profile'
                  className={`list-group-item`}>
                <span>
                    Your Profile
                </span>
            </Link> :
            ''}
            <Link to='/search'
                  className={`list-group-item`}>
                <span>
                    Search Stations
                </span>
            </Link>
            <Link to='/profile-search'
                  className={`list-group-item`}>
                <span>
                    Search Users
                </span>
            </Link>
            <Link to='/posts'
                  className={`list-group-item`}>
                <span>
                    Posts
                </span>
            </Link>
            <Link to='/policy'
                  className={`list-group-item`}>
                <span>
                    Privacy Policy
                </span>
            </Link>
            {isLoggedIn ?
            <Link to='/'
                  onClick={() => logout(dispatch)}
                  className={`bg-danger list-group-item`}>
                <span>
                    Logout
                </span>
            </Link> :
            <Link to='/login'
                  className={`bg-primary list-group-item`}>
                <span>
                    Login
                </span>
            </Link>
            }
        </div>
    )
};

export default NavigationBar;