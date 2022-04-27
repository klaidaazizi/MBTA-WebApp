import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from "../../actions/auth-actions";
import {changeHighlight} from '../../actions/nav-bar-action';
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
                  className={`list-group-item ${navigationData.activePage === "home" ? 'active': ''}`}
                  onClick={() => changeHighlight(dispatch,'home')}>
                <span>
                    Home
                </span>
            </Link>
            {isLoggedIn ?
            <Link to='/profile'
                  className={`list-group-item ${navigationData.activePage === "profile" ? 'active': ''}`}
                  onClick={() => changeHighlight(dispatch,'profile')}>
                <span>
                    Your Profile
                </span>
            </Link> :
            ''}
            <Link to='/search'
                  className={`list-group-item ${navigationData.activePage === "search_stations" ? 'active': ''}`}
                  onClick={() => changeHighlight(dispatch,'search_stations')}>
                <span>
                    Search Stations
                </span>
            </Link>
            <Link to='/profile-search'
                  className={`list-group-item ${navigationData.activePage === "search_users" ? 'active': ''}`}
                  onClick={() => changeHighlight(dispatch,'search_users')}>
                <span>
                    Search Users
                </span>
            </Link>
            {isLoggedIn ?
                <Link to='/posts'
                  className={`list-group-item ${navigationData.activePage === "posts" ? 'active': ''}`}
                  onClick={() => changeHighlight(dispatch,'posts')}>
                <span>
                    Posts
                </span>
            </Link>
                :
                ''}
            <Link to='/policy'
                  className={`list-group-item ${navigationData.activePage === "privacy" ? 'active': ''}`}
                  onClick={() => changeHighlight(dispatch,'privacy')}>
                <span>
                    Privacy Policy
                </span>
            </Link>
            {isLoggedIn ?
            <Link to='/'
                  onClick={() => {
                      logout(dispatch)
                      changeHighlight(dispatch,'home')
                  }}
                  className={`bg-danger list-group-item text-white fw-bold`}>
                <span>
                    Logout, {user.username}
                </span>
            </Link> :
            <Link to='/login'
                  className={`bg-primary list-group-item text-white fw-bold`}
                  onClick={() => changeHighlight(dispatch,'profile')}>
                <span>
                    Login
                </span>
            </Link>
            }
        </div>
    )
};

export default NavigationBar;