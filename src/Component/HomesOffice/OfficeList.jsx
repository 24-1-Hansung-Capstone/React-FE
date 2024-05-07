import React, { useEffect, useState } from "react";
import axios from "axios";
import OfficeListItem from "./OfficeListItem";
import { getSearchResult } from "../ShareFolder/SpringApi";
import { officeCategory } from "./OfficeData";

const OfficeList = ({ selectCategory, setSelectPost }) => {
  const [realtyData, setRealtyData] = useState([]);

  useEffect(() => {
    getSearchResult("CommunityPage/", setRealtyData);
  }, []);

  return (
    <div>
      {realtyData.filter(({ type }) => {
          if (selectCategory === "전체") {
            console.log(type)
            return true;
          } else {
            return type === officeCategory[selectCategory];
          }
        })
        .map((post) => (
          <OfficeListItem key={post.id} post={post} setSelectPost={setSelectPost}/>
        ))}
    </div>
  );
};

export default OfficeList;