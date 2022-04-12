import React from "react";
import NavigationReducer from "../reducers/navigation-reducer";
import AlertsReducer from "../reducers/alerts-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import NavigationBar from "./navigation-bar";
import AlertsBar from "./alerts-bar";
import {Outlet} from "react-router-dom";

const reducers = combineReducers({
    navigationData: NavigationReducer,
    alerts: AlertsReducer
});
const store = createStore(reducers);

const Home = () => {
    return (
        <Provider store={store}>
            <div className='container-fluid row mt-2 mb-2'>
                <div className='col-2'>
                    <NavigationBar/>
                </div>
                <div className='col-6'>
                    <Outlet/>
                </div>
                <div className='col-4'>
                    <AlertsBar/>
                </div>
            </div>
        </Provider>
    );
};

export default Home;