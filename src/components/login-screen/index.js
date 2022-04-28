import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import * as action from "../../actions/auth-actions";
import {useDispatch} from "react-redux";
import {changeHighlight} from "../../actions/nav-bar-action";


const Login = () => {
    const dispatch = useDispatch();
    changeHighlight(dispatch, '')
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate()
    const handleUsername = (e) => {
        setLoginUser({...loginUser, username: e.target.value})}
    const handlePassword = (e) => {
        setLoginUser({...loginUser, password: e.target.value})}
    const logIn = () =>
        action.login(dispatch, loginUser)
            .then(() => navigate('/profile'))
            .catch(e => alert(e));
    return(
        <>
        <div className='form'>
            <h6>Log In</h6>
            <form>
            <div className='input-container'>
                <label> Username or Email </label>
                <div>
                <input type='text'
                       placeholder='Enter username or email'
                       className='form-control'
                       onChange={handleUsername}/>
                </div>
            </div>
            <div className='input-container'>
                <label> Password </label>
            <div><input type='password'
                        placeholder='Enter password'
                        onChange={handlePassword}
                        className='form-control'/>
            </div>
            </div>
            <div className="button-container">
                <Button className="btn btn-primary mt-2" onClick={logIn} >Log In</Button>
                <div>
                    Don't have an account? <Link to={'/register'} className="btn btn-secondary me-2" >Create Account</Link>
            </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default Login;