import React, {useState} from "react";

function ChangyakListItem({house_NM, tot_SUPLY_HSHLDCO, hssply_ADRES, pblanc_URL}) {
    return (
        <div style = {{marginBottom : "20px"}}>
            <a href = {pblanc_URL} target="_blank" rel="noopener noreferrer">
                <b> {house_NM} </b>
                <div>공급가구 수: {tot_SUPLY_HSHLDCO}</div>
                <div>주소: {hssply_ADRES}</div>
            </a>
        </div>
    )
}

export default ChangyakListItem;