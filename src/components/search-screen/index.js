import React from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";

import './search.css';
import {useSelector} from "react-redux";


const SearchScreen = () => {
    const loggedIn = useSelector(state=> state.sessionReducer.isLoggedIn)

    const navigate = useNavigate();
    return (
        <div>
            <h4 className="search-page-text "> Explore Massachusetts with the MBTA </h4>
            <Link to="/home/rapid-transit" className="-search-main-buttons-text">
                <button id="button1" type="button" className=" button-sizing btn btn-danger ">
                    Rapid Transit
                </button>
            </Link>
            <Link to="/home/commuter-rail" className="-search-main-buttons-text">
                <button id="button2" type="button" className=" button-sizing btn  cr-color">
                    Commuter Rail
                </button>
            </Link>
            <Link to="/home/bus" className="-search-main-buttons-text">
                <button id="button3" type="button" className=" button-sizing btn btn-success ">
                    Bus
                </button>
            </Link>
            <Link to="/home/ferry" className="-search-main-buttons-text">
                <button id="button4" type="button" className=" button-sizing btn btn-info ">
                    Ferry
                </button>
            </Link>



            <div className="blurb">
                <span>Are you an employee of the Massachusetts Bay Transportation Authority?</span>
                <br/>
                <span className="slogan"> Use Teasy for all your MBTA needs! </span>
                <br/>
                <span>Visiting the Boston area? Are you a seasoned commuter of the MBTA?</span>
                <br/>
                <span className="slogan"> Use Teasy to get around with ease! </span>
            </div>

            <div id="wrapper">
            {!loggedIn ?

                <button onClick={() => navigate('/login')} type="button" className="col-3 btn  btn-dark home-button-login ">
                    Login
                </button>
                :
                <button onClick={() => navigate('/profile')} className="col-3 btn btn-dark home-button-login">
                Your Profile
            </button>
            }
            </div>


        </div>
    )
};

export default SearchScreen;