import React from "react";
import DanjiItem from "./DanjiItem";
import style from "./style/SatisfactionLeftBodyStyle";
import { useNavigate } from "react-router-dom";


function SatisfactionLeftBody({ result, setInputText, setReview, searchTerm, suggestQuery, isQueryChanged }) {
    const danjiNameMap = {};
    const navigate = useNavigate();
    
    result.forEach(item => {
        if (!danjiNameMap[item.danji_name]) {
            danjiNameMap[item.danji_name] = [];
        }
        danjiNameMap[item.danji_name].push(item);
    });

    const handleSearchTermClick = () => {
        const newURL = `/SatisfactionPage/${suggestQuery}`;
        navigate(newURL); // Change URL
        window.location.reload(); // Reload the page
    };

    const renderRecommendation = () => {
        if (isQueryChanged  === true || isQueryChanged ==='true') {
            return (
                <p style={style.recommendtypo} onClick={handleSearchTermClick}>
                    다음 검색어로 대신 검색 : <span style={{ cursor: 'pointer', color: 'blue' }}>{suggestQuery}</span>
                </p>
            );
        }
        return null;
    };

    return (
        <div style={style.leftBox}>
            {renderRecommendation()}
            { result.length === 0 ? <div>검색결과가 없습니다.</div> : Object.entries(danjiNameMap).map(([danjiName, danjiDatas], index) => {
                return (
                    <div key={index}>
                        <DanjiItem danjiName={danjiName} danjiDatas={danjiDatas} setInputText={setInputText} setReview={setReview}/>
                    
                    </div>
                )
            })}
        </div>
    )
}

export default SatisfactionLeftBody;
