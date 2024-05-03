import React, { useState, useEffect } from "react";
import OfficeList from "./OfficeList";
import "./style/AddOffice.css";
import { officeCategory } from "./OfficeData";

const AddOffice = ({ setSelectPostId, selectCategory }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [postData, setPostData] = useState([]);

  // State variables to hold input data
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    addr: "",
    desc: "",
    img: ""
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  function closePopup() {
    window.close();
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Add the new data to postData array
    const newData = {
      id: postData.length + 1,
      ...formData
    };
    setPostData([...postData, newData]);

    // Clear form data for next entry
    setFormData({
      type: "",
      name: "",
      addr: "",
      desc: "",
      img: ""
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
          <select className="type" onChange={handleInputChange} value={formData.type}>
            <option value="1" >전세</option>
            <option value="2">월세</option>
            <option value="3">매매</option>
            <option value="4">협의</option>
          </select>
            <textarea
              name="name"
              placeholder="매물 이름"
              value={formData.name}
              onChange={handleInputChange}
            ></textarea>
            <textarea
              name="addr"
              placeholder="매물 주소"
              value={formData.addr}
              onChange={handleInputChange}
            ></textarea>
            <textarea
              name="desc"
              placeholder="매물 설명"
              value={formData.desc}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button className="popupButton" onClick={handleSubmit}>업로드</button>
          <button className="popupButton" onClick={closePopup}>닫기</button>
        </div>
      )}


export default AddOffice;
