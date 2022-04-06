import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <>
        <div className='form'>
            <h6>Log In</h6>
            <form>
            <div className='input-container'>
                <label> Username or Email </label>
                <div>
                <input type='text' name='username'/>
                </div>
            </div>
            <div className='input-container'>
                <label> Password </label>
            <div><input type='text' name='password'/>
            </div>
            </div>
            <div className="button-container">
                <Link to="/" className="btn btn-primary mt-1">Submit</Link>
            </div>
            </form>
        </div>
        </>
    )
}

export default Login;