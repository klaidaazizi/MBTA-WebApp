import React from "react";
import FollowerUnit from "./follower-unit";

const FollowersList= ({follows=[],removeFollow, user}) => {

    return(
        <div>
            <ul className=" list-group">
                {
                    follows.map && follows.map(follow => {
                        return (
                            <FollowerUnit key={follow._id}
                                    follow={follow}
                                    removeFollow={removeFollow}
                                    user={user}
                            />
                        );
                    })
                }
            </ul>
        </div>
    )
}
export default FollowersList;