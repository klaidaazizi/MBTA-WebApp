import React from "react";

const LoginForm = () => {
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
                <button type="submit" className="btn btn-primary mt-1">Submit</button>
            </div>
            </form>
        </div>
        </>
    )
}

export default LoginForm;