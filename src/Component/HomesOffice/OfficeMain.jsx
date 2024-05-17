import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MenuBar from "../ShareFolder/Menubar";
import ResultSearchInput from "../ShareFolder/ResultSearchInput"
import OfficeCategorySelectBox from "./OfficeCategorySelectBox"
import OfficeLeftContainer from "./OfficeLeftContainer";
import OfficeRightContainer from "./OfficeRightContainer";
import style from "../ShareFolder/Style/SearchResultNavStyle"

import {
    officeCategory,
    postData, // TODO: 추후, 해당 부분을 useEffect로 처리해야한다.
  } from "./OfficeData";
import './style/OfficeMain.css'

const OfficeMain = ({ isLoggedIn, setIsLoggedIn }) => {
    const [selectPost, setSelectPost] = useState(null)
    const [selectCategory, setSelectCategory] = useState("전체")

    // const { searchTerm } = useParams();

    console.log(selectCategory)
    return (
        
        <div>
            <MenuBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <br></br>
            <br></br>
            <div>
            <div style = {style.NavBody}>
                </div>
                <OfficeCategorySelectBox setSelectCategory={setSelectCategory} selectCategory={selectCategory} />
                <div className="OfficeMainContainer" >
                    <OfficeLeftContainer setSelectPost={setSelectPost} selectCategory={selectCategory}/>
                    
                    <OfficeRightContainer selectPost={selectPost} />
                </div>
            </div>
        </div>
    );
}

export default OfficeMain;