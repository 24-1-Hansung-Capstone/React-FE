import React, { useEffect, useState } from "react";
import axios from "axios";
import OfficeListItem from "./OfficeListItem";
import { getSearchResult, deletePostFromServer } from "../ShareFolder/SpringApi";
import { officeCategory } from "./OfficeData";

const OfficeList = ({ selectCategory, setSelectPost }) => {
  const [realtyData, setRealtyData] = useState([]);

  useEffect(() => {
    getSearchResult("CommunityPage/", setRealtyData);
  }, []);

  const handleDeletePost = (postId) => {
    // 삭제 요청
    if (window.confirm("매물글을 삭제하시겠습니까?")) {
      deletePostFromServer(postId)
      .then((newData) => {
        setRealtyData(newData); // 삭제 후의 데이터로 상태를 업데이트하여 List를 다시 렌더링
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
    }
  };

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
          <OfficeListItem key={post.id} post={post} setSelectPost={setSelectPost} onDeletePost={handleDeletePost} />
        ))}
    </div>
  );
};

export default OfficeList;