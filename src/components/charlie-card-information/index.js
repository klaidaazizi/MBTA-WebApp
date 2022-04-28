import React from "react";
import {Button} from "react-bootstrap";
import {addMoney} from "../../actions/auth-actions";
import {useDispatch, useSelector} from "react-redux";

const CharlieCardInformation = () => {
    const user = useSelector(state => state.sessionReducer.profileData);
    const dispatch = useDispatch();
    return(
        <div className='card rounded bg-black mt-2 '>
            <span className="d-none d-lg-inline">
            <h6 className='text-center m-2 text-primary'>{user.name}'s CharlieCard Balance:</h6>
                </span>
            <h6 className='d-none d-md-inline text-center m-2 text-primary'>${user.charlieCardBalance.toFixed(2)}</h6>
            <Button className='d-none d-md-block btn btn-primary m-2' onClick={() => addMoney(dispatch, 5, user)}>Add $5</Button>
            <Button className=' d-none d-md-block btn btn-warning m-2' onClick={() => addMoney(dispatch, 10, user)}>Add
                $10</Button>
            <Button className=' d-none d-md-block btn btn-danger m-2' onClick={() => addMoney(dispatch, 20, user)}>Add $20</Button>
        </div>
    )
}

export default CharlieCardInformation;