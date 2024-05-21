// OfficeRightContainer.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import clickmeimage from "../../Asset/plsClickDetail.png";
import "./style/OfficeRightContainer.css"

const OfficeRightContainer = ({ selectPost }) => {

  const getButtonStyle = (type) => {
    if (selectPost && type === selectPost.type) {
      return { backgroundColor: "#BFDEE0" };
    } else {
      return { backgroundColor: "#E0E0E0" };
    }
  };

  return (
    <div className="officePost">
      {selectPost ? (
        <>
          <div className="officeName">
            <div>제목</div>
            <div>{selectPost.name}</div>
          </div>
          <div className="officeAddress">
            <div>주소</div>
            <div>{selectPost.addr}</div>
          </div>
          <div className="officeType">
            <div>거래유형</div>
            <button className="officeTypeButton" style={getButtonStyle("전세")}>전세</button>
            <button className="officeTypeButton" style={getButtonStyle("월세")}>월세</button>
            <button className="officeTypeButton" style={getButtonStyle("매매")}>매매</button>
            <button className="officeTypeButton" style={getButtonStyle("협의")}>협의</button>
          </div>
          <div className="officeDesc">
            <div style={{ whiteSpace: 'nowrap'}}>내용</div>
            <div>{selectPost.content}</div>
          </div>
          <div>
            <div>댓글</div>
          </div>
        </>
      ) : (
        <div className="officePlaceholder">
          <img src={clickmeimage} alt="Please Click for Detail" style={{ width: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default OfficeRightContainer;
