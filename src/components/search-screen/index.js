import React from "react";
import {Link, Route, Routes} from "react-router-dom";

import './search.css';


const SearchScreen = () => {

    return (
        <div>
            <h4 className="search-page-text "> Explore the MBTA </h4>
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

        </div>
    )
};

export default SearchScreen;