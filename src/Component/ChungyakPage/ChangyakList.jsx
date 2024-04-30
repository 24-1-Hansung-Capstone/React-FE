import React, {useState, useEffect} from "react";
import ChungyakListTitle from "./ChangyakListTitle";
import ChungyakListSearch from './ChangyakListSearch';
import ChangyakListItems from "./ChangyakListItems";
import { getSearchResult } from "../ShareFolder/SpringApi";
import style from "./style/ChangyakListStyle"

function ChungyakList() {
    const [searchHouse_NM, setSearchHouse_NM] = useState("");
    const [searchHssply_ADRES, setSearchHssply_ADRES] = useState("");
    const [applies, setApplies] = useState([]);

    
  useEffect(() => {
    getSearchResult("getAllApply", setApplies);
  }, []); // 빈 배열을 두어 한 번만 실행되도록 설정

    return (
        <div style = {style.list}>
          <div style = {style.sticky}>
            <ChungyakListTitle/>
            <ChungyakListSearch setSearchTitleParam = {setSearchHouse_NM} setSearchAddrParam = {setSearchHssply_ADRES} />
            <hr />
          </div>
            <ChangyakListItems applies = {applies} searchHouse_NM = {searchHouse_NM} searchHssply_ADRES = {searchHssply_ADRES}/>
        </div>
    )
}

export default ChungyakList;