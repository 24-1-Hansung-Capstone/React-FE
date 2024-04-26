import React, { useState } from "react";

import OfficeCategorySelect from "./OfficeCategorySelect";
import OfficePostList from "./OfficePostList";

const OfficeLeftContainer = ({ onSelectPost }) => {
    const officeCategory = {
        ALL : "모두",
        JEONSE: "전세",
        MONTH: "월세",
        SALE: "매매",
        CONFER: "협의"
    }
    Object.freeze(officeCategory) // 불변화

    const [selectCategory, setSelectCategory] = useState(officeCategory.ALL)

    return (
        <>
            <h3>왼쪽</h3>
            <OfficeCategorySelect 
                officeCategory={officeCategory}
                setSelectCategory={setSelectCategory}/>
            <OfficePostList 
                selectCategory={selectCategory}
                onSelectPost={onSelectPost}/>
        </>
    )
}

export default OfficeLeftContainer