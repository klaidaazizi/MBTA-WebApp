import * as service from '../services/conducted-route-service';

export const CONDUCT_ROUTE = 'CONDUCT_ROUTE';

export const conductRoute = async (dispatch, uid, routeString) => {
    const conductedRoute = {
        "routeString": routeString,
        "user": uid
    }
    const newRoute = await service.conductRoute(uid, conductedRoute)
    dispatch({
        type: CONDUCT_ROUTE,
        route: newRoute
    })
}