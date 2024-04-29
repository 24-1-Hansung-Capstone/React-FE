import React from "react";

import OfficeCategoryType from "./OfficeCategoryType";
import { officeCategory } from "./OfficeData";

const OfficeCategorySelectBox = ({setSelectCategory, selectedCategory}) => {

    return(
        <div>
            {
                Object
                    .values(officeCategory)
                    .map( type => <OfficeCategoryType context={type} onClick={() => setSelectCategory(type)} selectedCategory={selectedCategory}/> )
            }
        </div>
    )
}

export default OfficeCategorySelectBox