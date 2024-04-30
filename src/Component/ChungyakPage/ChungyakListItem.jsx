import React, {useState} from "react";
import { Link } from "react-router-dom";
import style from "./style/ChangyakListItemStyle";

function ChangyakListItem({house_NM, tot_SUPLY_HSHLDCO, hssply_ADRES, pblanc_URL}) {
    return (
        <div style = {style.item}>
            <Link style ={style.link} to = {pblanc_URL} target="_blank" rel="noopener noreferrer">
                <div style = {style.title}> {house_NM} </div>
                <div style = {style.supply}>공급가구 수: {tot_SUPLY_HSHLDCO}</div>
                <div style = {style.address}>주소: {hssply_ADRES}</div>
            </Link>
        </div>
    )
}

export default ChangyakListItem;