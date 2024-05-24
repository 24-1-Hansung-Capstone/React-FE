import React, { useState, useEffect } from "react";
import { sendCommentToServer } from "../ShareFolder/SpringApi";
import clickmeimage from "../../Asset/plsClickDetail.png";
import "./style/OfficeRightContainer.css";

const OfficeRightContainer = ({ selectPost }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (selectPost) {
      // 페이지가 렌더링될 때 댓글을 받아옴
      receiveCommentFromServer(selectPost.id, setComments);
    }
  }, [selectPost]); // selectPost가 바뀔 때마다 실행
  
  const getButtonStyle = (type) => {
    if (selectPost && type === selectPost.type) {
      return { backgroundColor: "#BFDEE0" };
    } else {
      return { backgroundColor: "#E0E0E0" };
    }
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== "") {
      sendCommentToServer(selectPost.writer,comment, selectPost.id, setComments, comments);
      setComment("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmitComment();
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
          <div className="officeWriter">
            <div>작성자</div>
            <div>{selectPost.writer}</div>
          </div>
          <div className="officeType">
            <div>거래유형</div>
            <button className="officeTypeButton" style={getButtonStyle("전세")}>전세</button>
            <button className="officeTypeButton" style={getButtonStyle("월세")}>월세</button>
            <button className="officeTypeButton" style={getButtonStyle("매매")}>매매</button>
            <button className="officeTypeButton" style={getButtonStyle("협의")}>협의</button>
          </div>
          <div className="officeDesc">
            <div style={{ whiteSpace: 'nowrap' }}>내용</div>
            <div>{selectPost.content}</div>
          </div>
          <div className="officeComments">
            <div>댓글</div>
            {comments.map((comment, index) => (
              <div key={index}>{comment}</div>
            ))}
            <div className="commentContainer">
              <input
                className="commentInput"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="댓글을 입력하세요"
              />
              <button className="commentSubmitBtn" onClick={handleSubmitComment}>
                댓글 등록
              </button>
            </div>
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
