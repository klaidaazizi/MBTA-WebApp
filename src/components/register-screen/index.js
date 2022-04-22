import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import * as service from '../../services/authentication-service';
import * as action from '../../actions/auth-actions';
import {useDispatch} from "react-redux";

const Register = () => {
    const [newUser, setNewUser] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //handle all info changes
    const handleName = (e) => {
        setNewUser({...newUser, name: e.target.value})
    }

    const handleEmail = (e) => {
        setNewUser({...newUser, email: e.target.value})
    }

    const handleUsername = (e) => {
        setNewUser({...newUser, username: e.target.value})
    }

    const handlePassword = (e) => {
        setNewUser({...newUser, password: e.target.value})
    }

    const handleRole = (e) => {
        setNewUser({...newUser, userRole: e.target.value})
    }

    const handleCharlieCardBalance = (e) => {
        setNewUser({...newUser, charlieCardBalance: e.target.value})
    }

    // handles Register button
    const createAccount = () =>
        action.register(dispatch, newUser)
            .then(() => navigate('/profile'))
            .catch(e => alert(e + "\n Username already exists. Please login."));
    return(
        <>
            <div className='form'>
                <h6>Register</h6>
                <form>
                    <div className='input-container'>
                        <label> Name </label>
                        <div>
                            <input type='text'  className="form-control" placeholder='Enter Name' onChange={handleName}/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Charlie Card Balance </label>
                        <div>
                            <input type='number'  className="form-control" placeholder='Enter Charlie Card Balance' onChange={handleCharlieCardBalance}/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Username </label>
                        <div>
                            <input type='text' className="form-control" placeholder='Enter Username' onChange={handleUsername}/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Email </label>
                        <div>
                            <input type='text' className="form-control" placeholder='Enter Email' onChange={handleEmail}/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Password </label>
                        <div><input type='password'  className="form-control" placeholder='Enter Password' onChange={handlePassword}/>
                        </div>
                    </div>
                    <div className='mt-2'>
                        Role:
                        <div className='mb-2'>
                        <select className='form-control' defaultValue={'Commuter'} value = {newUser.userRole} onChange={handleRole}>
                            <option value ='Commuter'>Commuter</option>
                            <option value='Conductor'>Conductor</option>
                            <option value='Admin'>Admin</option>
                        </select>
                        </div>
                    </div>
                    <div className="button-container">
                         <Button className="btn btn-secondary me-2" onClick={createAccount} >Create Account</Button>
                        <Link to='/policy' className="btn btn-info">Privacy Policy</Link>
                    </div>
                        <p className="mb-0 mt-2">
                            Already have an account?</p>
                        <Button className="btn btn-primary"
                                onClick={() => {
                                    navigate('/login');
                                }}>
                            Login
                        </Button>


                </form>
            </div>
        </>
    );
};

export default Register;