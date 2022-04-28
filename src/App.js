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
import Home from "./components";
import PostList from "./components/post-list/index";
import RapidTransitRoutes from "./components/search-screen/rapid-transit-routes";
import CommuterRailRoutes from "./components/search-screen/commuter-rail-routes";
import BusRoutes from "./components/search-screen/bus-routes";
import FerryRoutes from "./components/search-screen/ferry-routes";
import RapidRouteStops from "./components/search-screen/rapid-transit-route-stops";
import CommuterRailRouteStops from "./components/search-screen/commuter-rail-route-stops";
import BusRouteStops from "./components/search-screen/bus-route-stops";
import FerryRouteStops from "./components/search-screen/ferry-route-stops";
import PostFeedItem from "./components/post-list/post-feed-item";
import TransitStop from "./components/search-screen/transit-stop";
import PublicProfile from "./components/profile-screen/public-profile";
import EditProfile from "./components/profile-screen/edit-profile";
import UserSearchScreen from "./components/user-search/user-search-screen";
import StopSearchScreen from "./components/search-stops-screen/stop-search-screen";
import SearchStopDetails from "./components/search-stops-screen/search-stop-details-screen";
import CommuterRegister from "./components/register-screen/commuter-register";
import ConductorRegistration from "./components/register-screen/conductor-registration";
import AdminRegistration from "./components/register-screen/admin-registration";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

function App() {
  return (
      <BrowserRouter>
          <div className="container" >
              <Routes>
                  <Route path="/"
                         element={<Home/>}>
                      <Route index
                             element={<SearchScreen/>}/>
                      <Route path="login"
                             element={<Login/>}/>
                      <Route path="register"
                             element={<Register/>}/>
                      <Route path="register/commuter"
                             element={<CommuterRegister/>}/>
                      <Route path="register/conductor"
                             element={<ConductorRegistration/>}/>
                      <Route path="register/admin"
                             element={<AdminRegistration/>}/>
                      <Route path="profile/*"
                             element={<ProfileScreen/>}/>
                      <Route path="profile/lists/*"
                             element={<ProfileScreen/>}/>
                      <Route path="profile-search"
                             element={<UserSearchScreen/>}/>
                      <Route path="profile/editprofile"
                             element={<EditProfile/>}/>
                      <Route path="profile/editprofile/:username"
                             element={<EditProfile/>}/>
                      <Route path="profile/:username/*"
                             element={<PublicProfile/>}/>
                      <Route path="home"
                             element={<SearchScreen/>}/>
                      <Route path="home/rapid-transit"
                             element={<RapidTransitRoutes/>}/>
                      <Route path="home/rapid-transit/:routeId/:routeName"
                             element={<RapidRouteStops/>}/>
                      <Route path="home/commuter-rail"
                             element={<CommuterRailRoutes/>}/>
                      <Route path="home/commuter-rail/:routeId/:routeName"
                             element={<CommuterRailRouteStops/>}/>
                      <Route path="home/bus"
                             element={<BusRoutes/>}/>
                      <Route path="home/bus/:routeId/:routeName"
                             element={<BusRouteStops/>}/>
                      <Route path="home/ferry"
                             element={<FerryRoutes/>}/>
                      <Route path="home/ferry/:routeId/:routeName"
                             element={<FerryRouteStops/>}/>
                      <Route path="home/:transitType/:routeId/:routeName/stop/:stopId/:stopName"
                             element={<TransitStop/>}/>
                      <Route path="search"
                             element={<StopSearchScreen/>}/>
                      <Route path="search/details/:stopId"
                             element={<SearchStopDetails/>}/>
                      <Route path="search/details/:stopId/users-pinned/*"
                             element={<SearchStopDetails/>}/>
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