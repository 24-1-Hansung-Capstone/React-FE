import React, { useState, useEffect } from "react";
import { sendCommentToServer, receiveCommentFromServer, deleteCommentFromServer } from "../ShareFolder/SpringApi";
import clickmeimage from "../../Asset/plsClickDetail.png";
import "./style/OfficeRightContainer.css";
import commentIcon from "../../Asset/commentIcon.png";
import deleteButton from "../../Asset/deleteButton.png";

const OfficeRightContainer = ({ selectPost }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [userData, setUserData] = useState(null); // 현재 사용자 정보 추가

  useEffect(() => {
    if (selectPost) {
      // 페이지가 렌더링될 때 댓글을 받아옴
      receiveCommentFromServer(selectPost.id, setComments);
    }
    // 현재 사용자 정보를 세션 스토리지에서 가져옴
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
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
      if (userData) {
        sendCommentToServer(userData.email, comment, selectPost.id, setComments, comments);
      } else {
        console.log("userData가 없습니다.");
      }
      setComment("");
    }
  };

  const handleDeleteComment = (commentId) => {
      // 확인 창 표시
      if (window.confirm("댓글을 삭제하시겠습니까?")) {
        // 댓글 삭제 요청
        deleteCommentFromServer(commentId)
        .then((newComments) => {
            // 삭제 후 새로운 댓글 목록으로 상태를 업데이트
            setComments(newComments);
        })
        .catch((error) => {
            console.error("Error deleting comment:", error);
        });
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
        
          <div>
          {comments.map((comment, index) => (
            <div key={index} className="officeComments wrapper">
              <img src={commentIcon} alt="Comment Icon" className="commentIcon" />
              <div className="contentContainer">
                <span className="nameText">{comment.writer}</span>
                <span className="commentText">{comment.comment}</span>
                {/* 작성자와 현재 사용자가 같은 경우에만 삭제 버튼 표시 */}
                {userData && userData.email === comment.writer && (
                  <img
                    src={deleteButton}
                    alt="Delete Icon"
                    className="deleteButton"
                    onClick={() => handleDeleteComment(comment.id)}
                  />
                )}
              </div>
            </div>
          ))}
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
