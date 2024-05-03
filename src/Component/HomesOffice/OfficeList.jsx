// OfficeList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import OfficeListItem from "./OfficeListItem";

const OfficeList = ({ selectCategory, setSelectPostId }) => {
  const [realtyData, setRealtyData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/CommunityPage") // Assuming your endpoint to fetch all posts is '/api/posts'
      .then(response => {
        setRealtyData(response.data);
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  }, []); // Fetch data on component mount

  return (
    <>
      {realtyData
        .filter(({ type }) => selectCategory === 'ALL' || type === selectCategory)
        .map(post => (
          <OfficeListItem key={post.id} post={post} setSelectPostId={setSelectPostId} />
        ))}
    </>
  );
};

export default OfficeList;
