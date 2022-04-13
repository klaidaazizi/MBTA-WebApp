import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {addMoney} from "../../actions/charlie-card-action";
import {useDispatch, useSelector} from "react-redux";

const CharlieCardInformation = () => {
    const {balance} = useSelector(state => state.charlieCard);
    const dispatch = useDispatch();
    return(
        <div className='card rounded bg-black mt-2'>
            <h6 className='text-center m-2 text-primary'>Charlie Card Balance: ${balance}</h6>
            <Button className='btn btn-primary m-2' onClick={() => addMoney(dispatch, 5)}>Add $5</Button>
            <Button className='btn btn-warning m-2' onClick={() => addMoney(dispatch, 10)}>Add $10</Button>
            <Button className='btn btn-danger m-2' onClick={() => addMoney(dispatch, 20)}>Add $20</Button>
        </div>
    )
}

export default CharlieCardInformation;