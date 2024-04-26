import React, { useState } from "react";
import ChangyakListItem from "./ChungyakListItem";

function ChangyakListItems({ applies, searchHouse_NM, searchHssply_ADRES }) {
    const resultApplies = applies.filter(item => {
        if(searchHouse_NM == "" && searchHssply_ADRES == "") return true;
        else if(searchHouse_NM != "" && searchHssply_ADRES == "") return item.house_NM.includes(searchHouse_NM);
        else if(searchHouse_NM == "" && searchHssply_ADRES != "") return item.hssply_ADRES.includes(searchHssply_ADRES);
        else  return item.house_NM.includes(searchHouse_NM) && item.hssply_ADRES.includes(searchHssply_ADRES);
    })
    

    return (
        <div>
            {
                resultApplies.map((item, index) => {
                    return (
                        <ChangyakListItem house_NM={item.house_NM} tot_SUPLY_HSHLDCO={item.tot_SUPLY_HSHLDCO} hssply_ADRES = {item.hssply_ADRES} pblanc_URL = {item.pblanc_URL}/>
                    )
                })
            }
        </div>
    )
}

export default ChangyakListItems;