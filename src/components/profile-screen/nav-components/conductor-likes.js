import {useEffect, useState} from "react";
import ConductorLikesList from "./conductor-likes-list";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {findAllConductorLikes, findAllConductorLikesbyCommuter} from "../../../actions/conductor-likes-action";
import {unlikeConductor} from "../../../services/conductor-likes-service";

const ConductorLikes = ({userProfile, userViewing}) => {
    const params = useParams();
    const dispatch = useDispatch();
    let likes = [];
    const commuterLikes = useSelector(state => state.commuterLikes);
    const conductorlikes = useSelector(state => state.conductorlikes);
    if(userProfile.userRole && userProfile.userRole === "Commuter"){
        likes = commuterLikes;
    }
    if(userProfile.userRole && userProfile.userRole === "Conductor"){
        likes = conductorlikes;
    }


    let user = "me";
    if(params.username){
        user = userProfile._id;
    }
    useEffect(async ()=> {
        if(userProfile.userRole && userProfile.userRole === "Commuter"){
            await findAllConductorLikesbyCommuter(dispatch, user)
        }
        else if(userProfile.userRole && userProfile.userRole === "Conductor"){
            await findAllConductorLikes(dispatch, user)
        }
    },
        []);


    let unLikeConductor = null;
    if(userProfile.userRole && userProfile.userRole === "Commuter"){
        unLikeConductor = (cid) => unlikeConductor(cid).then(findAllConductorLikesbyCommuter(dispatch, user));
    }
    else if(userProfile.userRole && userProfile.userRole === "Conductor"){
        unLikeConductor = (cid) => unlikeConductor(cid).then(findAllConductorLikes(dispatch, user));
    }

    return(
        <ConductorLikesList likes={likes} unlikeConductor={unLikeConductor} user={user} userProfile={userProfile} userViewing={userViewing}/>
    );
};

export default ConductorLikes;

