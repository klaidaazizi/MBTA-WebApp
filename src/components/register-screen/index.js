import React from "react";
import {Link} from "react-router-dom";

const Register = () => {
    return(
        <>
            <div className='form'>
                <h6>Register</h6>
                <form>
                    <div className='input-container'>
                        <label> First Name </label>
                        <div>
                            <input type='text' name='firstname'/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Last Name </label>
                        <div>
                            <input type='text' name='lastname'/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Email Address </label>
                        <div>
                            <input type='text' name='email'/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Username </label>
                        <div>
                            <input type='text' name='username'/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Password </label>
                        <div><input type='text' name='password'/>
                        </div>
                    </div>
                    <div className='mt-2'>
                        Role:
                        <div className='mb-2'>
                        <select>
                            <option value ='commuter'>Commuter</option>
                            <option value='conductor'>Conductor</option>
                            <option value='admin'>Admin</option>
                        </select>
                        </div>
                    </div>
                    <div className="button-container">
                        <Link to="/login" className="btn btn-primary mt-1">Create Account</Link>
                    </div>
                    <div className="button-container">
                        <Link to="/policy" className="btn btn-info mt-3">Privacy Policy</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;