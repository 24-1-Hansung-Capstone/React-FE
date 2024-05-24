import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Asset/Logo.png';
import buttonStyle from "./style/OfficeCategorySelectBox";
import "./style/OfficeCategorySelectBox.css";

const OfficeCategorySelectBox = ({ setSelectCategory, selectCategory }) => {
  const handleButtonClick = (category) => {
    console.log(category);
    setSelectCategory(category);
  };

  return (
    <div className="CategorySelectBox">
      <div>
        <Link to="/">
          <img src={logo} style={buttonStyle.logo} alt="Logo" />
        </Link>
      </div>
      <div>
        {["전체", "전세", "월세", "매매", "협의"].map((category, index) => (
          <button
            key={index}
            className={selectCategory !== category ? "outlined" : "contained"}
            style={{
              ...buttonStyle.button,
              backgroundColor: selectCategory === category ? "#BFDEE0" : "#FFFFFF",
              color: selectCategory === category ? "#FFFFFF" : "#000000",
              border: selectCategory === category ? "2px solid #BFDEE0" : "2px solid #BFDEE0",
            }}
            onClick={() => handleButtonClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OfficeCategorySelectBox;
