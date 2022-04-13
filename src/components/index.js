import React from "react";
import NavigationReducer from "../reducers/navigation-reducer";
import AlertsReducer from "../reducers/alerts-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import NavigationBar from "./navigation-bar";
import AlertsBar from "./alerts-bar";
import CharlieCardInformation from "./charlie-card-information";
import {Outlet} from "react-router-dom";
import SearchStopReducer from "../reducers/serach-stop-reducer";
import SearchReducer from "../reducers/search-reducer";
import CharlieCardReducer from "../reducers/charlie-card-reducer";

const reducers = combineReducers({
    navigationData: NavigationReducer,
    alerts: AlertsReducer,
    rtRoutes: SearchReducer,
    crRoutes: SearchReducer,
    busRoutes: SearchReducer,
    ferryRoutes: SearchReducer,
    rapidRouteStops: SearchStopReducer,
    charlieCard: CharlieCardReducer
});
const store = createStore(reducers);

const Home = () => {
    return (
        <Provider store={store}>
            <div className='container-fluid row mt-2 mb-2'>
                <div className='col-2'>
                    <NavigationBar/>
                    <CharlieCardInformation/>
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