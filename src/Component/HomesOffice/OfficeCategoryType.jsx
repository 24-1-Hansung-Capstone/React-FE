import React from "react";

const OfficeCategoryType = ({context, onClick}) => {

    // TODO: onclick 처리, 태그 적절히 변경
    return(
        <>
            <div onClick={onClick}>{context}</div>
        </>
    )
}

export default OfficeCategoryType;