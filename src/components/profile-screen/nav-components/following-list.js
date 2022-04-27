import React from "react";
import Follow from "./following-unit";
import FollowingUnit from "./following-unit";

const FollowingList= ({follows=[],removeFollow, user}) => {

    return(
        <div>
            <ul className=" list-group">
                {
                    follows.map && follows.map(follow => {
                        //console.log(follow)
                        return (
                            <FollowingUnit key={follow._id}
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
export default FollowingList;