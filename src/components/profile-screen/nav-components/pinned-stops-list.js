import React from "react";
import StopUnit from "./stop-unit";

function Stops({stops = [], unpinStop, user}) {
    return (
        <div>
            <ul className=" list-group">
                {
                    stops.map && stops.map(stop => {
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