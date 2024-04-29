import React from "react";
import DanjiItem from "./DanjiItem"
import style from "./style/SatisfactionLeftBodyStyle"


function SatisfactionLeftBody({ result }) {

    const danjiNameMap = {};
    result.forEach(item => {
        if (!danjiNameMap[item.danji_name]) {
            danjiNameMap[item.danji_name] = [];
        }
        danjiNameMap[item.danji_name].push(item);
    });


    return (
        <div style={style.leftBox}>
            {Object.entries(danjiNameMap).map(([danjiName, danjiDatas], index) => {
                return (
                    <DanjiItem danjiName={danjiName} danjiDatas={danjiDatas} />
                )
            })}
        </div>
    )
}

export default SatisfactionLeftBody;