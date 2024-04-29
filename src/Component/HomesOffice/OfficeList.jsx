import React from "react";

import OfficeListItem from "./OfficeListItem";

const OfficeList = ({data, officeCategory, selectCategory, setSelectPostId}) => {

    return (
        <>
            {
                data
                    .filter(({type}) => selectCategory === officeCategory.ALL || type === selectCategory )
                    .map(post => <OfficeListItem post={post} setSelectPostId={setSelectPostId}/>)
            }
        </>
    )
}

export default OfficeList