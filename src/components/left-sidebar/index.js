import NavigationBar from "../navigation-bar";
import CharlieCardInformation from "../charlie-card-information";
import {useSelector} from "react-redux";

const LeftSidebar = () => {
    const isLoggedIn = useSelector(state=> state.sessionReducer.isLoggedIn)
    const user = useSelector(state=> state.sessionReducer.profileData)
    return(
        <div>
            <NavigationBar/>
            {isLoggedIn ?
                user.userRole === 'Commuter' ?
                    <CharlieCardInformation/> : '' :
            ''}
        </div>
    )
}
export default LeftSidebar;