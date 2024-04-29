// src/Components/SearchResultPage/SearchResultNav.jsx
import React from "react";
import MenuBar from "./Menubar";
import ResultSearchInput from "./ResultSearchInput"
import RelatedSearchWords from "../SearchResultPage/RelatedSearchWords";
import logo from '../../Asset/Logo.png';
import style from "./Style/SearchResultNavStyle"

function SearchResultNav({ searchWord, searchUrlPath}) {
    const recommendations = ["검색어 관련1", "검색어 관련2", "검색어 관련3", "검색어 관련4"];

    return (
        <div>
            <MenuBar />
            <div style = {style.NavBody}>
                <div style={style.logoAndSearchBar}>
                    <img src={logo} alt="Logo" style={style.logo} />
                    <ResultSearchInput searchWord={searchWord} searchUrlPath= {searchUrlPath} />
                </div>
                <div>
                    <RelatedSearchWords recommendations={recommendations} />
                </div>
            </div>
            <hr style={{}} />
        </div>
    );
}

export default SearchResultNav;