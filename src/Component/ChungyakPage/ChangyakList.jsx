import React, {useState} from "react";
import ChungyakListTitle from "./ChangyakListTitle";
import ChungyakListSearch from './ChangyakListSearch';

function ChungyakList() {
    const [searchParam, setSearchParam] = useState({
        "유형":null,
        "지역":null,
        "상태":null,
        "기간":null,
        "제목":null,
    });

    return (
        <div>
            <ChungyakListTitle/>
            <ChungyakListSearch setSearchParam = {setSearchParam}/>
        </div>
    )
}

export default ChungyakList;