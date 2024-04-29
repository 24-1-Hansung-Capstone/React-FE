import React, { useState } from "react";
import DanjiItemHeader from "./DanjiItemHeader";
import DanjiReview from "./DanjiReview";
import style from "./style/DanjiItemStyle"

function DanjiItem({danjiName, danjiDatas}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <div style={style.DanjiItem}>
            <DanjiItemHeader isOpen={isOpen} danjiName={danjiName} handleToggle={handleToggle}/>
            {isOpen && (
                <div>
                    {
                        danjiDatas.map((danjiData, index) => {
                            return(
                                <DanjiReview danjiData = {danjiData}/>
                            )
                        })
                    }
                </div>
            )}
        </div>
    )
}


export default DanjiItem;