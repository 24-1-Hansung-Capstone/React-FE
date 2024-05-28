// src/Components/SearchResultPage/SearchResultNav.jsx
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import MenuBar from "./Menubar";
import ResultSearchInput from "./ResultSearchInput"
import RelatedSearchWords from "../SearchResultPage/RelatedSearchWords";
import logo from '../../Asset/Logo.png';
import style from "./Style/SearchResultNavStyle"
import {getSearchResult} from "./api"

function SearchResultNav({ searchWord, searchUrlPath, isLoggedIn, setIsLoggedIn }) {
    const [recommendations, setRecommedations] = useState([]);

    useEffect(()=>{
        getSearchResult(searchWord, "relatedWord", setRecommedations)
    }, [searchWord])
    

    return (
        <div>
            <MenuBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div style={style.NavBody}>
                <div style={style.logoAndSearchBar}>
                    <Link to="/">
                        <img src={logo} alt="Logo" style={style.logo} />
                    </Link>
                    <ResultSearchInput searchWord={searchWord} searchUrlPath={searchUrlPath} />
                </div>
                <div>
                    {searchUrlPath === "SatisfactionPage" ? null : (
                        <>
                            <p style={style.recommendStyle}>연관검색어</p>
                            <RelatedSearchWords recommendations={recommendations} searchWord={searchWord}/>
                            <h2 style={style.blockText}>막아 이거</h2>
                        </>
                    )}
                </div>
            </div>
            <hr />
        </div>
    );
}

export default SearchResultNav;