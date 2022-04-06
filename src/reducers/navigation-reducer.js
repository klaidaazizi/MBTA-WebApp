import navigationData from '../data/navigation.json'

const NavigationReducer = (state = navigationData, action) => {
    switch (action.type){
        case 'UPDATE_PAGE':
            state = {
                activePage: action.activePage
            };
            return state;
        default:
            return state;
    }
}

export default NavigationReducer;