import React, { useState } from "react";
import DanjiItemHeader from "./DanjiItemHeader";
import DanjiReview from "./DanjiReview";
import style from "./style/DanjiItemStyle"

function DanjiItem({barChartData, danjiName, danjiDatas, setInputText, setReview}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <div style={style.DanjiItem} onClick={() => {setInputText(danjiName)}}>
            <DanjiItemHeader isOpen={isOpen} danjiName={danjiName} handleToggle={handleToggle}/>
            {isOpen && (
                <div>
                    {
                        danjiDatas.map((danjiData, index) => {
                            return(
                                <DanjiReview barChartData={barChartData} danjiData = {danjiData} setReview={setReview}/>
                            )
                        })
                    }
                </div>
            )}
        </div>
    )
}


export default DanjiItem;