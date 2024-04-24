import React, {useState} from "react";
import ChungyakListTitle from "./ChangyakListTitle";
import ChungyakListSearch from './ChangyakListSearch';
import ChangyakListItems from "./ChangyakListItems";
import { getSearchResult } from "../ShareFolder/SpringApi";

function ChungyakList() {
    const [searchHouse_NM, setSearchHouse_NM] = useState("");
    const [searchHssply_ADRES, setSearchHssply_ADRES] = useState("");
    const [applies, setApplies] = useState([]);

    getSearchResult("getAllApply", setApplies)

    return (
        <div>
            <ChungyakListTitle/>
            <ChungyakListSearch setSearchTitleParam = {setSearchHouse_NM} setSearchAddrParam = {setSearchHssply_ADRES} />
            <ChangyakListItems applies = {applies} searchHouse_NM = {searchHouse_NM} searchHssply_ADRES = {searchHssply_ADRES}/>
        </div>
    )
}

export default ChungyakList;