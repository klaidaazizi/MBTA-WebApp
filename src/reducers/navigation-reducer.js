import {UPDATE_PAGE} from '../actions/nav-bar-action';

const NavigationReducer = (state = {}, action) => {
    switch (action.type){
        case UPDATE_PAGE:
            return {
                activePage: action.activePage
            };
        default:
            return state;
    }
}

export default NavigationReducer;