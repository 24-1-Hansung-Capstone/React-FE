import React from "react";
import DanjiItem from "./DanjiItem"


function SatisfactionLeftBody({result}) {

    const danjiNameMap = {};
    result.forEach(item => {
      if (!danjiNameMap[item.danji_name]) {
        danjiNameMap[item.danji_name] = [];
      }
      danjiNameMap[item.danji_name].push(item);
    });


    return (
        <div>
            {Object.entries(danjiNameMap).map(([danjiName, danjiDatas], index) => {
                return (
                    <DanjiItem danjiName={danjiName} danjiDatas = {danjiDatas}/>
                )  
            })}
        </div>
    )
}

export default SatisfactionLeftBody;