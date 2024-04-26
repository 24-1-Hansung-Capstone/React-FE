// src/Components/SearchResultPage/SearchResultNav.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import SmallSearchBar from "../ShareFolder/SmallSearchBar";
import RelatedSearchWords from "./RelatedSearchWords";
import logo from '../../Asset/Logo.png';
import style from "../../Asset/style/SearchResultNav"
import MainSearchInput from "../Mainpage/MainSearchInput";

function SearchResultNav({searchWord}) {
    const recommendations = ["검색어 관련1", "검색어 관련2", "검색어 관련3", "검색어 관련4"];

    return (
        <div>
            <MenuBar />
            <div>
                <img src={logo} alt="Logo" style={style.logo}/>
                <MainSearchInput searchWord = {searchWord} style = {style.searchBar}/>
            </div>
            <div style={{}}>
                <RelatedSearchWords recommendations = {recommendations}/>
            </div>
            <hr style={{}} />
        </div>
    );
}

export default SearchResultNav;