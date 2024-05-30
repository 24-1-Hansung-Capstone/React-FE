import React from "react";
import DanjiItem from "./DanjiItem";
import style from "./style/SatisfactionLeftBodyStyle";


function SatisfactionLeftBody({ result, setInputText, setReview }) {
    const danjiNameMap = {};
    
    result.forEach(item => {
        if (!danjiNameMap[item.danji_name]) {
            danjiNameMap[item.danji_name] = [];
        }
        danjiNameMap[item.danji_name].push(item);
    });

    return (
        <div style={style.leftBox}>
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
