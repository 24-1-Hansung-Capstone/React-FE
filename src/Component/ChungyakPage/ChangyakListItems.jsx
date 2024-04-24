import React, { useState } from "react";
import ChangyakListItem from "./ChungyakListItem";

function ChangyakListItems({ applies, searchHouse_NM, searchHssply_ADRES }) {
    

    return (
        <div>
            {
                applies.map((item, index) => {
                    return (
                        <ChangyakListItem house_NM={item.house_NM} tot_SUPLY_HSHLDCO={item.tot_SUPLY_HSHLDCO} hssply_ADRES = {item.hssply_ADRES} pblanc_URL = {item.pblanc_URL}/>
                    )
                })
            }
        </div>
    )
}

export default ChangyakListItems;