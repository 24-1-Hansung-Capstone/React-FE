import React, { useState } from "react";
import arrow_up from '../../Asset/arrow_up.svg';
import arrow_down from '../../Asset/arrow_down.svg';
import DanjiItemHeader from "./DanjiItemHeader";
import DanjiReview from "./DanjiReview";

function DanjiItem({danjiName, danjiDatas}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <div >
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