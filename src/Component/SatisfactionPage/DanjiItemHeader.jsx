import React from "react";
import arrow_up from '../../Asset/arrow_up.svg';
import arrow_down from '../../Asset/arrow_down.svg';
import style from "./style/DanjiItemHeaderStyle"

function DanjiItemHeader({ danjiName, isOpen, handleToggle }) {

    return (
        <div onClick={handleToggle} style={style.header}>
            <div style={style.danjiName}>
                {danjiName}
            </div>
            <img src={isOpen ? arrow_up : arrow_down} alt={isOpen ? "arrow_up" : "arrow_down"} style={style.arrow} />
        </div>
    )
}


export default DanjiItemHeader;