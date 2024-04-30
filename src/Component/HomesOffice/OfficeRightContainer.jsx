import React from "react";
import { postData } from "./OfficeData";
import "./style/OfficeRightContainer.css";

const OfficeRightContainer = ({ selectPostId }) => {
  const selectPost = postData.find(({ id }) => id === selectPostId);

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
            <button className="officeTypeButton">{selectPost.type}</button>
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
        <></>
      )}
    </div>
  );
};

export default OfficeRightContainer;
