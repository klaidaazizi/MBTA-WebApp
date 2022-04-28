import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from "../../actions/auth-actions";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
                <span className="d-none d-lg-inline"><img className='img-fluid float-start' src="/images/teasy.png"/></span>
            </Link>
            <Link to='/'
                  className={`list-group-item ${navigationData.activePage === "home" ? 'active': ''}`}>
                <FontAwesomeIcon icon="fa-solid fa-house" className="me-1" />
                <span>
                    Home
                </span>
            </Link>
            {isLoggedIn ?
            <Link to='/profile'
                  className={`list-group-item ${navigationData.activePage === "profile" ? 'active': ''}`}>
                <FontAwesomeIcon icon="fa-solid fa-user" className="me-1"/>
                <span>
                    Your Profile
                </span>
            </Link> :
            ''}
            <Link to='/search'
                  className={`list-group-item ${navigationData.activePage === "search_stations" ? 'active': ''}`}>
                <FontAwesomeIcon icon="fa-solid fa-train-subway" className="me-1"/>
                <span>
                    Search Stations
                </span>
            </Link>
            <Link to='/profile-search'
                  className={`list-group-item ${navigationData.activePage === "search_users" ? 'active': ''}`}>
                <FontAwesomeIcon icon="fa-solid fa-user-group" className="me-1"/>
                <span>
                    Search Users
                </span>
            </Link>
            {isLoggedIn ?
                <Link to='/posts'
                  className={`list-group-item ${navigationData.activePage === "posts" ? 'active': ''}`}>
                    <FontAwesomeIcon icon="fa-solid fa-bullhorn" className="me-1"/>
                    <span>
                    Posts
                    </span>
                </Link>
                :
                ''}
            <Link to='/policy'
                  className={`list-group-item ${navigationData.activePage === "privacy" ? 'active': ''}`}>
                <FontAwesomeIcon icon="fa-solid fa-shield-halved" className="me-1"/>
                <span>
                    Privacy Policy
                </span>
            </Link>
            {isLoggedIn ?
            <Link to='/'
                  onClick={() => {
                      logout(dispatch)}}
                  className={`bg-danger list-group-item text-white fw-bold`}>
                <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" className="me-1"/>
                <span>
                    Logout, {user.username}
                </span>
            </Link> :
            <Link to='/login'
                  className={`bg-primary list-group-item text-white fw-bold`}>
                <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" className="me-1"/>
                <span>
                    Login
                </span>
            </Link>
            }
        </div>
    )
};

export default NavigationBar;