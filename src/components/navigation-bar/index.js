import React from "react";

const NavigationBar = ({active = {
                        "active": "home"
                        }}) => {
    return(
        <>
            <ul className='list-group'>
                <li className={`list-group-item ${active.active === "home" ? 'active': ''}`}>Home</li>
                <li className={`list-group-item ${active.active === "profile" ? 'active': ''}`}>Profile</li>
                <li className={`list-group-item ${active.active === "search" ? 'active': ''}`}>Search</li>
                <li className={`list-group-item ${active.active === "profile" ? 'posts': ''}`}>Posts</li>
                <li className={`list-group-item ${active.active === "logout" ? 'active': ''}`}>Logout</li>
            </ul>
        </>
    )
};

export default NavigationBar;