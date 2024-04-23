import React from "react";

function ChangyakListSearch({setSearchParam}){

    return (
        <div>
            유형 <input type = "text"/> <br />
            지역 <input type = "text"/> <br />
            상태 <input type = "text"/> <br />
            기간 <input type="date"/> ~ <input type="date"/> <br />
            제목 <input type = "text"/>
        </div>
    )
}

export default ChangyakListSearch;