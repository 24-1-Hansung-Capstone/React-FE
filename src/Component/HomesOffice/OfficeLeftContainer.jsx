import React, { useState } from "react";
import OfficeList from "./OfficeList";
import "./style/OfficeLeftContainer.css";

const OfficeLeftContainer = ({setSelectPostId, selectCategory}) => {

    return (
        <div className="officeLeftList">
            <OfficeList 
                selectCategory={selectCategory}
                setSelectPostId={setSelectPostId}/>
        </div>
    )
}

export default OfficeLeftContainer