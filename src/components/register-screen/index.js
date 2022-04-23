import React, {useState} from "react";
import {BrowserRouter, Routes} from "react-router-dom";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import * as action from '../../actions/auth-actions';
import {useDispatch} from "react-redux";

const Register = () => {
    const navigate = useNavigate();
    return(
        <div className='container mt-4'>
            <h3 className='text-center text-primary fw-bold'>Select a Profile Type</h3>
            <div className='container text-center'>
                <div className='btn-group-vertical text-center col-9'>
                        <Button className='btn btn-lg btn-dark mt-2 rounded'
                                onClick={() => navigate('commuter')}>
                            <i className='fa fa-briefcase'/>
                            <br/>
                             Commuter
                        </Button>
                        <Button className='btn btn-lg btn-dark mt-2 rounded'
                                onClick={() => navigate('conductor')}>
                            <i className='fa fa-train'/>
                            <br/>
                            Conductor
                        </Button>
                        <Button className='btn btn-lg btn-dark mt-2 rounded'
                                onClick={() => navigate('admin')}>
                            <i className='fa fa-desktop'/>
                            <br/>
                            Admin
                        </Button>
                </div>
            </div>
        </div>
    )
};

export default Register;