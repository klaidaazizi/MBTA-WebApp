import React from "react";

const Preformatted = ({object}) => {
    return(
        <div>
            {JSON.stringify(object, null, 2)}
        </div>
    )
}
export default Preformatted;