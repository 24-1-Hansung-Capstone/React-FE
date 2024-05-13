import React from "react";
import {Link} from "react-router-dom"
import { Button, Stack } from "@mui/material";
import logo from '../../Asset/Logo.png';
import style from "./style/OfficeCategorySelectBox"
import "./style/OfficeCategorySelectBox.css";

const OfficeCategorySelectBox = ({ setSelectCategory, selectCategory }) => {
  const handleButtonClick = (category) => {
    console.log(category);
    setSelectCategory(category);
  };

  return (

    <div className="CategorySelectBox">
      <Stack spacing={1.3} direction="row">
        <Link to="/"><img src={logo} style={style.logo} /></Link>
        {["전체", "전세", "월세", "매매", "협의"].map((category, index) => (
          <Button
            key={index}
            variant={selectCategory !== category ? "outlined" : "contained"}
            style={style.button}
            onClick={() => handleButtonClick(category)}>
            {category}
          </Button>
        ))}
      </Stack>
    </div>
  );
};

export default OfficeCategorySelectBox;
