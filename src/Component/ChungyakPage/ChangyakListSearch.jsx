import React from "react";

function ChangyakListSearch({setSearchTitleParam, setSearchAddrParam}){
    const onChangeSearchTitleParam = (e) => {
        setSearchTitleParam(e.target.value)
    }

    const onChangeSearchAddrParam = (e) =>{
        setSearchAddrParam(e.target.value)
    }

    return (
        <div>
            제목 <input type = "text" onChange={onChangeSearchTitleParam}/> <br />
            주소 <input type = "text" onChange={onChangeSearchAddrParam}/> <br />
        </div>
    )
}

export default ChangyakListSearch;