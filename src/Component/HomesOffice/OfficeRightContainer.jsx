import React from "react";
import { postData } from "./OfficeData";
import "./style/OfficeRightContainer.css";
import clickmeimage from "../../Asset/plsClickDetail.png";

const OfficeRightContainer = ({ selectPostId }) => {
  const selectPost = postData.find(({ id }) => id === selectPostId);

  const getButtonStyle = (type) => {
    if (type === selectPost.type) {
      return { backgroundColor: "#92baff" };
    } else {
      return { backgroundColor: "#E0E0E0" };
    }
  };

  return (
    <div className="officePost">
      {selectPost != null ? (
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
          <div className="officeImg">
            <div>사진</div>
            <div>{selectPost.img}</div>
          </div>
          <div className="officeDesc">
            <div>내용</div>
            <div>{selectPost.desc}</div>
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
