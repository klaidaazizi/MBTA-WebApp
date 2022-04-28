import React from "react";
import '../user-search/index.css';
import StopSearchBar from "./index";

const StopSearchScreen = () => {
    return(
        <div >
            <h6 className='text-center text-capitalize bg-info p-2 text-white rounded-2'> Search Massachusetts Bay Transportation Authority Stop Information </h6>
            <img src='https://bostonography.com/wp-content/uploads/2013/09/Survey-Map-1-lg.jpg'
                 alt='' className="map-dimensions banner d-none d-lg-block"/>
            <div className=''>
                <StopSearchBar/>
            </div>

        </div>
    )

}

export default StopSearchScreen;