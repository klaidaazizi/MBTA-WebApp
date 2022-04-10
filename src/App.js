import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login-screen";
import Register from "./components/register-screen";
import ProfileScreen from "./components/profile-screen";
import SearchScreen from "./components/search-screen";
import PrivacyPolicy from "./components/privacy-policy";
import HomeScreen from "./components/home-screen";
import Home from "./components";
import PostList from "./components/post-list";
import AlertScreen from "./components/alert-screen";

function App() {
  return (
      <BrowserRouter>
          <div className="container" >
              <Routes>
                  <Route path="/"
                         element={<Home/>}>
                      <Route index
                             element={<HomeScreen/>}/>
                      <Route path="login"
                             element={<Login/>}/>
                      <Route path="register"
                             element={<Register/>}/>
                      <Route path="profile"
                             element={<ProfileScreen/>}/>
                      <Route path="search"
                             element={<SearchScreen/>}/>
                      <Route path="posts"
                             element={<PostList/>}/>
                      <Route path="policy"
                             element={<PrivacyPolicy/>}/>
                      <Route path="alerts/:aid"
                             element={<AlertScreen/>}/>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;