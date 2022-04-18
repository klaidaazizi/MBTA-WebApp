import React from "react";
import {Link, Route, Routes} from "react-router-dom";

import './search.css';


const SearchScreen = () => {

    return (
        <div>
            <h4 className="search-page-text text-center"> Search for your next stop here.</h4>
            <Link to="/search/rapid-transit" className="-search-main-buttons-text">
                <button id="button1" type="button" className=" button-sizing btn btn-danger ">
                    Rapid Transit
                </button>
            </Link>
            <Link to="/search/commuter-rail" className="-search-main-buttons-text">
                <button id="button2" type="button" className=" button-sizing btn  cr-color">
                    Commuter Rail
                </button>
            </Link>
            <Link to="/search/bus" className="-search-main-buttons-text">
                <button id="button3" type="button" className=" button-sizing btn btn-success ">
                    Bus
                </button>
            </Link>
            <Link to="/search/ferry" className="-search-main-buttons-text">
                <button id="button4" type="button" className=" button-sizing btn btn-info ">
                    Ferry
                </button>
            </Link>

        </div>
    )
};

export default SearchScreen;