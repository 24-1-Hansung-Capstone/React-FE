import React, { useState } from "react";
import MenuBar from "../ShareFolder/Menubar";
import Logo from "../ShareFolder/Logo";
import SmallSearchBar from "../ShareFolder/SmallSearchBar";
import OfficeCategorySelectBox from "./OfficeCategorySelectBox"
import OfficeLeftContainer from "./OfficeLeftContainer";
import OfficeRightContainer from "./OfficeRightContainer";
import {
    officeCategory,
    postData, // TODO: 추후, 해당 부분을 useEffect로 처리해야한다.
  } from "./OfficeData";
import './style/OfficeMain.css'

const OfficeMain = () => {

    // 
    
    const [selectPostId, setSelectPostId] = useState(null)
    const [selectCategory, setSelectCategory] = useState(officeCategory.ALL)

    return (
        <div>
            <MenuBar />
            <div>
                <Logo />
                <SmallSearchBar />
                <div className="OfficeMainContainer" >
                    <OfficeCategorySelectBox 
                        setSelectCategory={setSelectCategory}
                        selectCategory={selectCategory}/>
                    <hr/>
                    <OfficeLeftContainer setSelectPostId={setSelectPostId} />
                    <OfficeRightContainer selectPostId={selectPostId} />
                </div>
            </div>
        </div>
    );
}

export default OfficeMain;