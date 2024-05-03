import React, { useState, useEffect } from "react";
import OfficeList from "./OfficeList";
import "./style/AddOffice.css";
import axios from "axios";
import { officeCategory } from "./OfficeData";

const AddOffice = ({ setSelectPostId, selectCategory }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [postData, setPostData] = useState([]);

  // State variables to hold input data
  const [formData, setFormData] = useState({
    type: 1,
    name: "",
    addr: "",
    content: "",
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData({ ...formData, [name]: value });
  };

  function closePopup() {
    window.close();
  };

  const handleSubmit = () => {
    console.log(formData)
    axios.post("http://localhost:8080/CommunityPage/register", formData) // Assuming your endpoint to fetch all posts is '/api/posts'
      .then(response => {
        setPostData(response.data);
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  };

  // useEffect to save data to localStorage whenever postData changes
  useEffect(() => {
    localStorage.setItem("postData", JSON.stringify(postData));
  }, [postData]);

  // useEffect to load data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("postData");
    if (savedData) {
      setPostData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div>
      <h2>새로운 데이터 입력</h2>
      <div className="popup">
        <select className="type" name="type" onChange={handleInputChange} value={formData.type}>
          <option value={1}>전세</option>
          <option value={2}>월세</option>
          <option value={3}>매매</option>
          <option value={4}>협의</option>
        </select>
        <input type="text" name="name" placeholder="매물 이름" value={formData.name} onChange={handleInputChange} />
        <textarea
          name="addr"
          placeholder="매물 주소"
          value={formData.addr}
          onChange={handleInputChange}
        ></textarea>
        <textarea
          name="content"
          placeholder="매물 설명"
          value={formData.content}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button className="popupButton" onClick={handleSubmit}>업로드</button>
      <button className="popupButton" onClick={closePopup}>닫기</button>
    </div>
  );
};

export default AddOffice;
