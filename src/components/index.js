import React from "react";
import NavigationReducer from "../reducers/navigation-reducer";
import AlertsReducer from "../reducers/alerts-reducer";
import SearchReducer from "../reducers/search-reducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import NavigationBar from "./navigation-bar";
import AlertsBar from "./alerts-bar";
import {Outlet} from "react-router-dom";
import SearchStopReducer from "../reducers/serach-stop-reducer";
import SessionReducer from "../reducers/auth-reducer";
import UserReducer from "../reducers/user-reducer";

const reducers = combineReducers({navigationData: NavigationReducer, alerts: AlertsReducer,
    rtRoutes: SearchReducer, crRoutes: SearchReducer, busRoutes: SearchReducer, ferryRoutes: SearchReducer,
    rapidRouteStops: SearchStopReducer, sessionReducer: SessionReducer, userReducer: UserReducer});
const store = createStore(reducers);

const Home = () => {
    return (
        <Provider store={store}>
            <div className='container row mt-2'>
                <div className='col-2'>
                    <NavigationBar/>
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