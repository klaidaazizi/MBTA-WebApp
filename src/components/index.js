import React from "react";
import AlertsReducer from "../reducers/alerts-reducer";
import LeftSidebar from "./left-sidebar";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import NavigationBar from "./navigation-bar";
import AlertsBar from "./alerts-bar";
import {Outlet} from "react-router-dom";
import NavigationReducer from "../reducers/navigation-reducer";
import SearchStopReducer from "../reducers/serach-stop-reducer";
import SessionReducer from "../reducers/auth-reducer";
import UserReducer from "../reducers/user-reducer";
import SearchReducer from "../reducers/search-reducer";
import PinnedStopsReducer from "../reducers/pinned-stops-reducer";

const reducers = combineReducers({
    navigationData: NavigationReducer,
    alertsReducer: AlertsReducer,
    rtRoutes: SearchReducer,
    crRoutes: SearchReducer,
    busRoutes: SearchReducer,
    ferryRoutes: SearchReducer,
    rapidRouteStops: SearchStopReducer,
    sessionReducer: SessionReducer,
    updatedProfile: SessionReducer,
    users: UserReducer,
    pinnedStops: PinnedStopsReducer,
    pinExists: PinnedStopsReducer
});
const store = createStore(reducers);

const Home = () => {
    return (
        <Provider store={store}>
            <div className='container-fluid row mt-2 mb-2'>
                <div className='col-2'>
                    <LeftSidebar/>
                </div>
                <div className='col-7'>
                    <Outlet/>
                </div>
                <div className='col-3'>
                    <AlertsBar/>
                </div>
            </div>
        </Provider>
    );
};

export default Home;