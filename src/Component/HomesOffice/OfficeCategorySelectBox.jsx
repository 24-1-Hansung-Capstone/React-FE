import React from "react";
import { Button, Stack } from "@mui/material";
import "./style/OfficeCategorySelectBox.css";

const OfficeCategorySelectBox = ({ setSelectCategory, selectCategory }) => {
  const handleButtonClick = (category) => {
    console.log(category);
    setSelectCategory(category);
  };

  return (
    <div className="CategorySelectBox">
      <Stack spacing={1} direction="row">
        {["전체", "전세", "월세", "매매", "협의"].map((category, index) => (
          <Button
            key={index}
            variant={selectCategory !== category ? "outlined" : "contained"}
            onClick={() => handleButtonClick(category)}
          >
            {category}
          </Button>
        ))}
      </Stack>
    </div>
  );
};

export default OfficeCategorySelectBox;
