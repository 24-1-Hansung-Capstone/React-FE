// src/Components/SearchResultPage/SearchResultNav.jsx
import React from "react";
import MenuBar from "../ShareFolder/Menubar";
import SearchInput from "../ShareFolder/ResultSearchInput"
import RelatedSearchWords from "./RelatedSearchWords";
import logo from '../../Asset/Logo.png';
import style from "./style/SearchResultNavStyle"

function SearchResultNav({ searchWord }) {
    const recommendations = ["검색어 관련1", "검색어 관련2", "검색어 관련3", "검색어 관련4"];

    return (
        <div>
            <MenuBar />
            <div style = {style.NavBody}>
                <div style={style.logoAndSearchBar}>
                    <img src={logo} alt="Logo" style={style.logo} />
                    <SearchInput searchWord={searchWord} searchUrlPath={"search"} />
                </div>
                <div style={style.RelatedSearchWords}>
                    <RelatedSearchWords recommendations={recommendations} />
                </div>
            </div>
            <hr style={{}} />
        </div>
    );
}

export default SearchResultNav;