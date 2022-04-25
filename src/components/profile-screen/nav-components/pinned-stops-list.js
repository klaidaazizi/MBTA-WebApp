import React from "react";
import StopUnit from "./stop-unit";

function Stops({stops = [], unpinStop, user}) {
    console.log("in list")
    console.log(stops)
    console.log(user)

    return (
        <div>
            <ul className=" list-group">
                {
                    stops.map && stops.map(stop => {
                        console.log(stop)
                        return (
                            <StopUnit key={stop._id}
                                      unpinStop={unpinStop}
                                      stop={stop}
                                      user={user}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Stops;