import React from "react";
import NavigationBar from "./navigation-bar";
import AlertsBar from "./alerts-bar";
import {Outlet} from "react-router-dom";

const Home = () => {
    return (

        <div className='container row mt-2'>
            <div className='col-2'>
                <NavigationBar/>
            </div>
            <div className='col-7'>
                <Outlet/>
            </div>
            <div className='col-3'>
                <AlertsBar/>
            </div>
        </div>

    );
};

export default Home;