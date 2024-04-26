import React, { useState } from "react";

import OfficeCategorySelectBox from "./OfficeCategorySelectBox";
import OfficeList from "./OfficeList";

const OfficeLeftContainer = ({ data, setSelectPostId }) => {
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
        <div>
            <OfficeCategorySelectBox 
                officeCategory={officeCategory}
                setSelectCategory={setSelectCategory}/>
            <hr/>
            <OfficeList 
                data={data}
                officeCategory={officeCategory}
                selectCategory={selectCategory}
                setSelectPostId={setSelectPostId}/>
        </div>
    )
}

export default OfficeLeftContainer