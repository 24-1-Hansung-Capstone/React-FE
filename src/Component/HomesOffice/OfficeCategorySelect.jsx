import React from "react";

import OfficeCategoryType from "./OfficeCategoryType";

const OfficeCategorySelect = ({officeCategory, setSelectCategory}) => {

    return(
        <div>
            {
                Object
                    .values(officeCategory)
                    .map( type => <OfficeCategoryType context={type} onClick={ () => setSelectCategory(type)}/> )
            }
        </div>
    )
}

export default OfficeCategorySelect