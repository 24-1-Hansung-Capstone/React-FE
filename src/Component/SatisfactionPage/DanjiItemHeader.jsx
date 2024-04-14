import React from "react";
import arrow_up from '../../Asset/arrow_up.svg';
import arrow_down from '../../Asset/arrow_down.svg';

function DanjiItemHeader({danjiName, isOpen, handleToggle}) {

    return (
        <div onClick={handleToggle} style = {{fontSize:"20px", fontWeight:"bold"}}>
            <span>{danjiName}</span>
            <span>  </span>
            <img src={isOpen ? arrow_up : arrow_down} alt={isOpen ? "arrow_up" : "arrow_down"}
            style={
                {width:"20px"
            }} />
            <hr/>
        </div>
    )
}


export default DanjiItemHeader;