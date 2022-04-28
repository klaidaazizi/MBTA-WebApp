import React from "react";
import ConductorLikeItem from "./conductor-like-item";

function ConductorLikesList({likes = [], unlikeConductor, user, userProfile, userViewing}) {
    // console.log(user)
    // console.log(userProfile)
    // console.log(userViewing)

    return (
        <div>
            <ul className=" list-group">
                {
                    likes.map && likes.map(like => {
                        //console.log(like)
                        return (
                            <ConductorLikeItem key={like._id}
                                               unlikeConductor={unlikeConductor}
                                      like={like}
                                      user={user}
                                               userProfile={userProfile}
                                               userViewing={userViewing}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default ConductorLikesList;