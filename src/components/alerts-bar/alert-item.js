import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const AlertItem = ({alert}) => {
    return(
        <li className='list-group-item'>
            <span>{alert.attributes.short_header}</span>
        </li>
    )
};

export default AlertItem;