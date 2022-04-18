import React from "react";

const AlertItem = ({alert}) => {
    return(
        <li className='list-group-item'>
            <span>{alert.attributes.short_header}</span>
        </li>
    )
};

export default AlertItem;