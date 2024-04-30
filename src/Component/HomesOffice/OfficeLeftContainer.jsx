import React, { useState } from "react";
import OfficeList from "./OfficeList";
import "./style/OfficeLeftContainer.css";
import { officeCategory, postData as initialPostData } from "./OfficeData";

const OfficeLeftContainer = ({ setSelectPostId, selectCategory }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [postData, setPostData] = useState(initialPostData);

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

  // Function to handle form submission
  const handleSubmit = () => {
    // Add the new data to postData array
    const newData = {
      id: postData.length + 5, // Start with id: 5 and increment
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

  return (
    <div className="officeLeftList">
      <OfficeList selectCategory={selectCategory} setSelectPostId={setSelectPostId} />
      <button className="officeAddButton" onClick={() => setIsPopupOpen(true)}>매물 추가</button>
      {isPopupOpen && (
        <div>
          <h2>새로운 데이터 입력</h2>
          <div className="popup">
          <input type="text" name="type" placeholder="매물 종류" value={formData.type} onChange={handleInputChange} />
          <input type="text" name="name" placeholder="매물 이름" value={formData.name} onChange={handleInputChange} />
          <input type="text" name="addr" placeholder="매물 주소" value={formData.addr} onChange={handleInputChange} />
          <input type="text" name="desc" placeholder="매물 설명" value={formData.desc} onChange={handleInputChange} />
          <input type="text" name="img" placeholder="매물 이미지" value={formData.img} onChange={handleInputChange} />
          </div>
          <button className="popupButton" onClick={handleSubmit}>업로드</button>
          <button className="popupButton" onClick={() => setIsPopupOpen(false)}>닫기</button>
        </div>
      )}
    </div>
  );
};

export default OfficeLeftContainer;
