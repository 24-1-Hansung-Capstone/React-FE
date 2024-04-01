// src/Components/ToggleList/ToggleList.jsx
import React from "react";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import ShareStyles from "../ShareStyles/ShareStyles";

function ToggleList() {
    return (
        <div>
            <div style={ShareStyles.ToggleList}>
                <div>
                    <ToggleMenu context="뉴스" />
                </div>
                <div>
                    <ToggleMenu context="블로그" />
                </div>
                <div>
                    <ToggleMenu context="관광지" />
                </div>
                <div>
                    <ToggleMenu context="범죄율" />
                </div>
                <div>
                    <ToggleMenu context="지역 만족도" />
                </div>
                <div>
                    <ToggleMenu context="청약 공고" />
                </div>
                <div>
                    <ToggleMenu context="부동산 정보" />
                </div>
            </div>

        </div>
    );
}

export default ToggleList;
