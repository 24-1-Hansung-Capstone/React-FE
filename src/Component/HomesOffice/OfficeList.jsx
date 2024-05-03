// OfficeList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import OfficeListItem from "./OfficeListItem";
import { getSearchResult } from "../ShareFolder/SpringApi";

const OfficeList = ({ selectCategory, setSelectPostId }) => {
    const [realtyData, setRealtyData] = useState([]);

    useEffect(() => {
        getSearchResult("CommunityPage/", setRealtyData)
    }, []); // Fetch data on component mount

    return (
        <div>
            {
        console.log(realtyData)       }
            {realtyData
                .filter(({ type }) => {return selectCategory === "전체" || type === selectCategory})
                .map(post => (
                    <OfficeListItem key={post.id} post={post} setSelectPostId={setSelectPostId} />
                ))}
        </div>
    );
};

export default OfficeList;
