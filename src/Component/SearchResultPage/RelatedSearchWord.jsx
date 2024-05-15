// src/Components/SearchResultPage/RelatedSearchWord.jsx
import React from "react";
import style from "./style/RelatedSearchWordStyle"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RelatedSearchWord({ recommendation, searchWord }) {
    const next_word = recommendation.includes(searchWord) ? recommendation : searchWord + " " + recommendation;
    
    const url = `http://13.125.234.8:3000/search/${next_word}`;

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
