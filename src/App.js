import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login-screen/index";
import Register from "./components/register-screen";
import ProfileScreen from "./components/profile-screen";
import SearchScreen from "./components/search-screen";
import PrivacyPolicy from "./components/privacy-policy";
import HomeScreen from "./components/home-screen";
import Home from "./components";
import PostList from "./components/post-list";
import RapidTransitRoutes from "./components/search-screen/rapid-transit-routes";
import CommuterRailRoutes from "./components/search-screen/commuter-rail-routes";
import BusRoutes from "./components/search-screen/bus-routes";
import FerryRoutes from "./components/search-screen/ferry-routes";
import RapidRouteStops from "./components/search-screen/rapid-transit-route-stops";
import CommuterRailRouteStops from "./components/search-screen/commuter-rail-route-stops";
import BusRouteStops from "./components/search-screen/bus-route-stops";
import FerryRouteStops from "./components/search-screen/ferry-route-stops";
import Index from "./components/search-screen/transit-stop";
import PublicProfile from "./components/profile-screen/public-profile";
import EditProfile from "./components/profile-screen/edit-profile";
import UserSearchBar from "./components/user-search";
import UserSearchScreen from "./components/user-search/user-search-screen";

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
                      <Route path="profile-search"
                             element={<UserSearchScreen/>}/>
                      <Route path="profile/editprofile"
                             element={<EditProfile/>}/>
                      <Route path="profile/:username/*"
                             element={<PublicProfile/>}/>
                      <Route path="search"
                             element={<SearchScreen/>}/>
                      <Route path="search/rapid-transit"
                             element={<RapidTransitRoutes/>}/>
                      <Route path="search/rapid-transit/:routeId"
                             element={<RapidRouteStops/>}/>
                      <Route path="search/commuter-rail"
                             element={<CommuterRailRoutes/>}/>
                      <Route path="search/commuter-rail/:routeId"
                             element={<CommuterRailRouteStops/>}/>
                      <Route path="search/bus"
                             element={<BusRoutes/>}/>
                      <Route path="search/bus/:routeId"
                             element={<BusRouteStops/>}/>
                      <Route path="search/ferry"
                             element={<FerryRoutes/>}/>
                      <Route path="search/ferry/:routeId"
                             element={<FerryRouteStops/>}/>
                      <Route path="search/:transitType/:routeId/stop/detail/:stopId/:stopName"
                             element={<Index/>}/>
                      <Route path="posts"
                             element={<PostList/>}/>
                      <Route path="policy"
                             element={<PrivacyPolicy/>}/>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;