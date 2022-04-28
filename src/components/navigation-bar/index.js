import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from "../../actions/auth-actions";
import "./nav-bar.css"

const NavigationBar = () => {
    const navigationData = useSelector(state => state.navigationData)
    const isLoggedIn = useSelector(state=> state.sessionReducer.isLoggedIn)
    const user = useSelector(state => state.sessionReducer.profileData)
    const dispatch = useDispatch();

    return(
        <div className='list-group'>
            <Link to='/'
                  className={`list-group-item`}>
                <span><img className='img-fluid float-start' src="/images/teasy.png"/></span>
            </Link>
            <Link to='/'
                  className={`list-group-item ${navigationData.activePage === "home" ? 'active': ''}`}>
                <span>
                    Home
                </span>
            </Link>
            {isLoggedIn ?
            <Link to='/profile'
                  className={`list-group-item ${navigationData.activePage === "profile" ? 'active': ''}`}>
                <span>
                    Your Profile
                </span>
            </Link> :
            ''}
            <Link to='/search'
                  className={`list-group-item ${navigationData.activePage === "search_stations" ? 'active': ''}`}>
                <span>
                    Search Stations
                </span>
            </Link>
            <Link to='/profile-search'
                  className={`list-group-item ${navigationData.activePage === "search_users" ? 'active': ''}`}>
                <span>
                    Search Users
                </span>
            </Link>
            {isLoggedIn ?
                <Link to='/posts'
                  className={`list-group-item ${navigationData.activePage === "posts" ? 'active': ''}`}>
                <span>
                    Posts
                </span>
            </Link>
                :
                ''}
            <Link to='/policy'
                  className={`list-group-item ${navigationData.activePage === "privacy" ? 'active': ''}`}>
                <span>
                    Privacy Policy
                </span>
            </Link>
            {isLoggedIn ?
            <Link to='/'
                  onClick={() => {
                      logout(dispatch)}}
                  className={`bg-danger list-group-item text-white fw-bold`}>
                <span>
                    Logout, {user.username}
                </span>
            </Link> :
            <Link to='/login'
                  className={`bg-primary list-group-item text-white fw-bold`}>
                <span>
                    Login
                </span>
            </Link>
            }
        </div>
    )
};

export default NavigationBar;