import NavigationBar from "../navigation-bar";
import CharlieCardInformation from "../charlie-card-information";
import {useSelector} from "react-redux";

const LeftSidebar = () => {
    const isLoggedIn = useSelector(state=> state.sessionReducer.isLoggedIn)
    return(
        <div>
            <NavigationBar/>
            {isLoggedIn ?
            <CharlieCardInformation/> :
            ''}
        </div>
    )
}
export default LeftSidebar;