import React from "react";

import OfficeListItem from "./OfficeListItem";
import { officeCategory, postData} from "./OfficeData"; 

const OfficeList = ({selectCategory, setSelectPostId}) => {

    return (
        <>
            {
                postData
                    .filter(({type}) => selectCategory === officeCategory.ALL || type === selectCategory )
                    .map(post => <OfficeListItem post={post} setSelectPostId={setSelectPostId}/>)
            }
        </>
    )
}

export default OfficeList