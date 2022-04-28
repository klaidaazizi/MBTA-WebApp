import NavigationBar from "../navigation-bar";
import CharlieCardInformation from "../charlie-card-information";
import {useSelector} from "react-redux";

const LeftSidebar = () => {
    const isLoggedIn = useSelector(state=> state.sessionReducer.isLoggedIn)
    const user = useSelector(state=> state.sessionReducer.profileData)
    return(
        <div>
            <NavigationBar/>
            <div className=" d-none d-md-inline">
            {isLoggedIn ?
                user.userRole === 'Commuter' ?
                    <CharlieCardInformation/> : '' :
            ''}
            </div>
        </div>
    )
}
export default LeftSidebar;