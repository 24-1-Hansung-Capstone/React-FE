import React, { useState } from "react";
import DanjiItemHeader from "./DanjiItemHeader";
import DanjiReview from "./DanjiReview";

function DanjiItem({danjiName, danjiDatas}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <div style={{marginBottom :"40px"}}>
            <DanjiItemHeader isOpen={isOpen} danjiName={danjiName} handleToggle={handleToggle}/>
            {console.log(danjiDatas)}
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