import React from "react";
import { Button, Stack } from "@mui/material";
import { officeCategory } from "./OfficeData";
import "./style/OfficeCategorySelectBox.css"

const OfficeCategorySelectBox = ({setSelectCategory, selectCategory}) => {
    return(
        <div className="CategorySelectBox">
            <Stack spacing={1} direction="row">
            {
                Object
                    .values(["전체", "전세", "월세", "매매", "협의"])
                    // .map( type => <OfficeCategoryType context={type} onClick={() => setSelectCategory(type)} selectedCategory={selectedCategory}/> )
                    .map((type, index) => (
                        <Button variant={ selectCategory !== type ? "outlined" : "contained"} onClick={() => setSelectCategory(type)}>
                            {type}
                        </Button>))
            }
            </Stack>
        </div>
    )
}

export default OfficeCategorySelectBox