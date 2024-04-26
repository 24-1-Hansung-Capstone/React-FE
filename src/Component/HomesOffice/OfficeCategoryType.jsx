import React from "react";

const OfficeCategoryType = ({context, onClick}) => {

    return(
        <>
            <a onClick={onClick}>{context}</a>
        </>
    )
}

export default OfficeCategoryType;