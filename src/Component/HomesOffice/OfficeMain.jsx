import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MenuBar from "../ShareFolder/Menubar";
import ResultSearchInput from "../ShareFolder/ResultSearchInput"
import logo from '../../Asset/Logo.png';
import OfficeCategorySelectBox from "./OfficeCategorySelectBox"
import OfficeLeftContainer from "./OfficeLeftContainer";
import OfficeRightContainer from "./OfficeRightContainer";
import style from "../ShareFolder/Style/SearchResultNavStyle"

import {
    officeCategory,
    postData, // TODO: 추후, 해당 부분을 useEffect로 처리해야한다.
  } from "./OfficeData";
import './style/OfficeMain.css'

const OfficeMain = ({ searchWord, searchUrlPath}) => {
    const [selectPostId, setSelectPostId] = useState(null)
    const [selectCategory, setSelectCategory] = useState("전체")
    const { searchTerm } = useParams();

    return (
        <div>
            <MenuBar />
            <div>
            <div style = {style.NavBody}>
                <div style={style.logoAndSearchBar}>
                    <img src={logo} alt="Logo" style={style.logo} />
                    <ResultSearchInput searchWord={searchWord} searchUrlPath= {searchUrlPath} />
                </div>
                </div>
                <OfficeCategorySelectBox setSelectCategory={setSelectCategory} selectCategory={selectCategory} />
                <hr/>
                <div className="OfficeMainContainer" >
                    <OfficeLeftContainer setSelectPostId={setSelectPostId} selectCategory={selectCategory}/>
                    
                    <OfficeRightContainer selectPostId={selectPostId} />
                </div>
            </div>
        </div>
    );
}

export default OfficeMain;