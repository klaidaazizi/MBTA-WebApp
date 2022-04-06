import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import * as service from '../../services/user-service'

const Register = () => {
    const [newUser, setNewUser] = useState({})

    const navigate = useNavigate();
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
        setNewUser({...newUser, role: e.target.value})
    }

    // handles Register button
    const Register = (e) => {
        if (newUser.name === '' || newUser.username === '' || newUser.email === '' || newUser.password === '') {
            alert("Please fill out all information!")
        }
         else
        {
            service.register(newUser)
                .then(() => navigate('/login'))
                .catch(e => alert(e));
            }
        }

    return(
        <>
            <div className='form'>
                <h6>Register</h6>
                <form>
                    <div className='input-container'>
                        <label> Name </label>
                        <div>
                            <input type='text' value = {newUser.name} onChange={handleName}/>
                        </div>
                    </div>

                    <div className='input-container'>
                        <label> Username </label>
                        <div>
                            <input type='text' value = {newUser.username} onChange={handleUsername}/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Email </label>
                        <div>
                            <input type='text' value = {newUser.email} onChange={handleEmail}/>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label> Password </label>
                        <div><input type='password' value = {newUser.password} onChange={handlePassword}/>
                        </div>
                    </div>
                    <div className='mt-2'>
                        Role:
                        <div className='mb-2'>
                        <select value = {newUser.role} onChange={handleRole}>
                            <option value ='commuter'>Commuter</option>
                            <option value='conductor'>Conductor</option>
                            <option value='admin'>Admin</option>
                        </select>
                        </div>
                    </div>
                    <div className="button-container">
                         <Button className="btn btn-primary me-2" onClick={Register} >Create Account</Button>
                        <Link to='/policy' className="btn btn-info">Privacy Policy</Link>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Register;