// src/Components/SearchResultPage/RelatedSearchWord.jsx
import React from "react";
import style from "./style/RelatedSearchWordStyle"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RelatedSearchWord({ recommendation, searchWord }) {    
    const url = `http://13.125.234.8:3000/search/${recommendation}`;

    return (
        <a
            style={{ textDecoration: 'none', color: 'black' }}
            href = {url}
        >
            <div style={style.relatedSearchWord}>
            {recommendation}
            </div>
        </a>
        // <Link
        //     to={url}
        //     style={{ textDecoration: 'none', color: 'black' }}>
        //     <div style={style.relatedSearchWord}>
        //         {recommendation}
        //     </div>
        // </Link>
    );
}

export default RelatedSearchWord;
