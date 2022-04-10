import React from "react";
import {Link} from "react-router-dom";
import {findAlertById} from "../../actions/alerts-action";
import {useDispatch} from "react-redux";

const AlertItem = ({alert}) => {
    const dispatch = useDispatch();
    const startTime = new Date(alert.attributes.active_period[0].start).toDateString();
    let endTime;
    if (alert.attributes.active_period[0].end) {
        endTime = new Date(alert.attributes.active_period[0].end).toDateString();
    } else {
        endTime = null;
    }
    return(
        <Link to={alert.links.self} onClick={() => findAlertById(dispatch, alert.id)}>
            <li className='list-group-item'>
                {/*<div className='row'>*/}
                {/*    <span className='col-5 fw-bold'>{startTime}</span>*/}
                {/*    <span className='col-3 fw-bold'>--></span>*/}
                {/*    {endTime?<span className='col-4 fw-bold'>{endTime}</span>:<span className='col-4 fw-bold'>TBD</span>}*/}
                {/*</div>*/}
                <span>{alert.attributes.short_header}</span>
            </li>
        </Link>
    )
};

export default AlertItem;