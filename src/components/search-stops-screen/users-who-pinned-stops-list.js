import React from "react";
import UserUnit from "./user-pinned-stop-summary";

function UsersWhoPinned({users}) {
    console.log("in user stop list")
    console.log(users)

    return (
        <div>
            <ul className=" list-group">
                {
                    users.map && users.map(user => {
                        console.log(user)
                        return (
                            <UserUnit key={user._id}
                                      stop={user}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default UsersWhoPinned;