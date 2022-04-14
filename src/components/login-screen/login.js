// import React from "react";
// import {useLocation, useNavigate} from "react-router-dom";
// import {useState} from "react";
// import * as service from "../../services/authentication-service";
//
// export const Login = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [loginUser, setLoginUser] = useState({});
//     const login = () => {
//         const redirect = location.state && location.state.redirect ? location.state.redirect : '/home';
//         service.login(loginUser).then((user) => navigate(redirect))
//             .catch(e => alert(e));
//     }
//     return (
//         <div>
//             <h1>Login</h1>
//             <input onChange={(e) => setLoginUser({...loginUser, username: e.target.value})}
//                    placeholder="Username"
//                    className="mb-2 form-control"/>
//             <input onChange={(e) => setLoginUser({...loginUser, password: e.target.value})}
//                    type="password"
//                    placeholder="Password"
//                    className="mb-2 form-control"/>
//             <button onClick={login}
//                     className="btn btn-success mb-5">Login</button>
//         </div>
//     );
// };
