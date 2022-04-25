import React from "react";
import UserUnit from "./user-pinned-stop-summary";

function UsersWhoPinned({users}) {

    return (
        <div>
            <ul className=" list-group">
                {
                    users.map && users.map(user => {
                        return (
                            <UserUnit key={user._id}
                                      user={user}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default UsersWhoPinned;