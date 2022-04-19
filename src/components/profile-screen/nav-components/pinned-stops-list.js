import React from "react";
import StopUnit from "./stop-unit";

function Stops({stops = [], unpinStop}) {
    console.log("in list")
    console.log(stops)

    return (
        <div>
            <ul className=" list-group">
                {
                    stops.map && stops.map(stop => {
                        console.log(stop)
                        return (
                            <StopUnit key={stop._id}
                                  unpinStop={unpinStop}
                                  stop={stop}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Stops;