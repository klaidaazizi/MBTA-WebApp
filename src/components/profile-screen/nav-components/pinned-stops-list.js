import React from "react";
import TransitStop from "../../search-screen/transit-stop/index";

function Stops({stops = [], unpinStop}) {

    return (
        <div>
            <h6>Pin stop</h6>
            <ul className=" list-group">
                {
                    stops.map && stops.map(stop => {
                        return (
                            <TransitStop key={stop._id}
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