import React from "react";

const RegisterForm = () => {
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
                    <div className='input-container'>
                        <label> Confirm Password </label>
                        <div><input type='text' name='password'/>
                        </div>
                    </div>
                    <div className='mt-1'>
                        Role:
                        <select>
                            <option value ='commuter'>Commuter</option>
                            <option value='conductor'>Conductor</option>
                            <option value='admin'>Admin</option>
                        </select>
                    </div>
                    <div className="button-container">
                        <button type="submit" className="btn btn-primary mt-1">Create Account</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterForm;