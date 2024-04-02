// src/Components/ToggleList/ToggleList.jsx
import React from "react";
import ToggleCategory from "../ToggleCategory/ToggleCategory";
import ShareStyles from "../ShareStyles/ShareStyles";

function ToggleList({searchResults}) {
    return (
        <div style={ShareStyles.ToggleList}>
            <ToggleCategory searchResults = {searchResults.filter(item => item.category === "news")} context="뉴스" />
            <ToggleCategory searchResults = {searchResults.filter(item => item.category === "blog")} context="블로그" />
            <ToggleCategory searchResults = {searchResults.filter(item => item.category === "visitkorea")} context="관광지" />
            {/* <ToggleCategory context="범죄율" />
            <ToggleCategory context="지역 만족도" />
            <ToggleCategory context="청약 공고" />
            <ToggleCategory context="부동산 정보" /> */}
        </div>
    );
}

export default ToggleList;
