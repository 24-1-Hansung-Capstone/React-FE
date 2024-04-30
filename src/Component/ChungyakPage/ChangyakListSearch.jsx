import React from "react";
import style from "./style/ChangyakListSearchStyle"

function ChangyakListSearch({setSearchTitleParam, setSearchAddrParam}){
    const onChangeSearchTitleParam = (e) => {
        setSearchTitleParam(e.target.value)
    }

    const onChangeSearchAddrParam = (e) =>{
        setSearchAddrParam(e.target.value)
    }

    return (
        <div>
            <div style = {style.div}>
            제목 <input style = {style.input} type = "text" onChange={onChangeSearchTitleParam}/> 
            </div>
            <div style = {style.div}>
            주소 <input style = {style.input} type = "text" onChange={onChangeSearchAddrParam}/> 
            </div>
        </div>
    )
}

export default ChangyakListSearch;
