import React from "react";

export default function HyperlinkPreview({ currentPage }) {
  return (
    <div>
      <h1 style={{ fontSize: "30px" }}>하이퍼링크 {currentPage}</h1>
      <p style={{ fontSize: "20px" }}>하이퍼링크 {currentPage} 미리보기</p>
    </div>
  );
}
