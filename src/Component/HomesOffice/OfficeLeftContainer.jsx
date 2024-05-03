import React, { useState, useEffect } from "react";
import OfficeList from "./OfficeList";
import "./style/OfficeLeftContainer.css";
import { officeCategory } from "./OfficeData";

const OfficeLeftContainer = ({ setSelectPostId, selectCategory }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [postData, setPostData] = useState([]);

  // State variables to hold input data
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    addr: "",
    content: "",
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function openPopup(){
    window.open("http://localhost:3000/CommunityPage/addOffice", "new", "toolbar=no, menubar=no, scrollbars=yes, resizable=no, width=700, height=700, left=0, top=0" );
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
      content: "",
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
    <div className="officeLeftList">
      <button className="officeAddButton" onClick={openPopup}>매물 추가</button>
      <OfficeList selectCategory={selectCategory} setSelectPostId={setSelectPostId} />
    </div>
  );
};

export default OfficeLeftContainer;