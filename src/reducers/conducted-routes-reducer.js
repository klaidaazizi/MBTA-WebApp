import {CONDUCT_ROUTE} from "../actions/conducted-routes-action";
import {CLEAR_CONDUCTED_ROUTE} from "../actions/auth-actions";
import {LOAD_CONDUCTED_ROUTE} from "../actions/auth-actions";

const ConductedRoutesReducer = (state = {
                                                            user: "",
                                                            routeString: ""
                                                            },
                                action) => {
    switch (action.type) {
        case CONDUCT_ROUTE:
            return {
                user: action.route.user,
                routeString: action.route.routeString
            };
        case LOAD_CONDUCTED_ROUTE:
            if (action.route !== null) {
                return {
                    user: action.route.user,
                    routeString: action.route.routeString
                }
            } else {
                return state
            }
        case CLEAR_CONDUCTED_ROUTE:
            return {
                user: "",
                routeString: ""
            }
        default:
            return state
    }
}

export default ConductedRoutesReducer;