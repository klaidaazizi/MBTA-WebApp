import React from "react";

const AlertItem = ({alert}) => {
    return(
        <li className='list-group-item'>
            <div className='row'>
                <span className='col-6 fw-bold'>{alert.date}</span>
                <span className='col-6 fw-bold'>{alert.time}</span>
            </div>
            <span>{alert.banner}</span>
        </li>
    )
};

export default AlertItem;