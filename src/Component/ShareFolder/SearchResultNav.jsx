// src/Components/SearchResultPage/SearchResultNav.jsx
import React, {useEffect, useState} from "react";
import MenuBar from "./Menubar";
import ResultSearchInput from "./ResultSearchInput"
import RelatedSearchWords from "../SearchResultPage/RelatedSearchWords";
import logo from '../../Asset/Logo.png';
import style from "./Style/SearchResultNavStyle"
import {getSearchResult} from "./api"

function SearchResultNav({ searchWord, searchUrlPath}) {
    const [recommendations, setRecommedations] = useState([]);

    useEffect(()=>{
        getSearchResult(searchWord, "relatedWord", setRecommedations)
    }, [])
    

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