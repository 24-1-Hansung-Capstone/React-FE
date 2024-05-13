// src/Components/SearchResultPage/RelatedSearchWord.jsx
import React from "react";
import style from "./style/RelatedSearchWordStyle"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RelatedSearchWord({ recommendation }) {

    const navigate = useNavigate();
    
    const url = `http://localhost:3000/search/${recommendation}`;

    return (
        <a
            style={{ textDecoration: 'none', color: 'black' }}
            href = {url}
        >
            <div style={style.relatedSearchWord}>
            {recommendation}
            </div>
        </a>
    );
}

export default RelatedSearchWord;
