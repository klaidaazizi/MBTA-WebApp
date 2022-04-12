import React from "react";
import {Link, Route, Routes} from "react-router-dom";

import './search.css';


const SearchScreen = () => {

    return (
        <div>

            <h4 className="search-page-text"> Search for your next stop here.</h4>
                    <button id="button1" type="button" className=" button-sizing btn btn-danger ">
                        <Link to="/search/rapid-transit" className="-search-main-buttons-text"> Rapid Transit</Link>
                    </button>
                    <button id="button2" type="button" className=" button-sizing btn  cr-color">
                        <Link to="/search/commuter-rail" className="-search-main-buttons-text"> Commuter Rail
                        </Link>
                    </button>

            <button id="button3" type="button" className=" button-sizing btn btn-success ">
                <Link to="/search/bus" className="-search-main-buttons-text">Bus</Link>
            </button>
            <button id="button4" type="button" className=" button-sizing btn btn-info ">
                <Link to="/search/ferry" className="-search-main-buttons-text">Ferry</Link>
            </button>

            {/*<Routes>*/}
            {/*    <Route path="/rapid-transit" element={<RapidTransitRoutes/>}/>*/}
            {/*    /!*<Route path="/commuter-rail" element={</>}/>*!/*/}
            {/*    /!*<Route path="/bus" element={</>}/>*!/*/}
            {/*    /!*<Route path="/ferry" element={</>}/>*!/*/}
            {/*</Routes>*/}

        </div>
    )
};

export default SearchScreen;