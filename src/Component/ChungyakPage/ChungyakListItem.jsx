import React, {useState} from "react";
import { Link } from "react-router-dom";
import style from "./style/ChangyakListItemStyle";

function ChangyakListItem({house_NM, tot_SUPLY_HSHLDCO, hssply_ADRES, pblanc_URL}) {
    function openPopup(){
        window.open(pblanc_URL, "new", "toolbar=no, menubar=no, scrollbars=yes, resizable=no, width=700, height=700, left=0, top=0" );
      };

    return (
        <div style = {style.item}>
            
            <Link style ={style.link} onClick={openPopup}>
                <div style = {style.title}> {house_NM} </div>
                <div style = {style.supply}>공급가구 수: {tot_SUPLY_HSHLDCO}</div>
                <div style = {style.address}>주소: {hssply_ADRES}</div>
            </Link>
        </div>
    )
}

export default ChangyakListItem;