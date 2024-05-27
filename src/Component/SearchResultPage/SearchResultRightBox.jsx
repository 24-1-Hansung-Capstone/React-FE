import React, { useState, useEffect } from "react";
import SearchResultRightBoxChattingLog from "./SearchResultRightBoxChattingLog";
import SearchResultRightBoxInput from "./SearchResultRightBoxInput";
import style from "./style/SearchResultRightBoxStyle";
import { getSummary } from "../ShareFolder/api";

function SearchResultRightBox({ searchTerm, searchResults, summary }) {
  const [userMessages, setUserMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isInputable, setIsInputable] = useState(true);

  // useEffect(() => {
  //   console.log("오른쪽 박스 이펙트")
  //   setSummary(["요약중..."]);
  //   getSummary("nlpModel/summary", (res) => {
  //     setSummary(res);
  //   });
  // }, [searchResults, searchTerm]);

  return (
    <div style={style.rightBox}>
      <section>
        <div style={style.searchTerm}>
          <p>{searchTerm}</p>
        </div>
        {/*<div style={style.noticeWord}>
          <p>내용 요약을 원하시면 왼쪽의 요약 버튼을 눌러보세요.</p>
        </div>*/}
        <div>
          {summary && Array.isArray(summary) && summary.map((item, idx) => (
            <div key={idx}>
              {idx % 2 === 1 ? <li style={{ marginLeft: "20px", marginBottom: "50px" }}>{item}</li> : <div>{item}</div>}
            </div>
          ))}
        </div>

        <SearchResultRightBoxChattingLog
          userMessages={userMessages}
          AI_Text={summary}
        />

        <SearchResultRightBoxInput
          currentMessage={currentMessage}
          setCurrentMessage={setCurrentMessage}
          setUserMessages={setUserMessages}
          isInputable={isInputable}
          setIsInputable={setIsInputable}
        />
      </section>
    </div>
  );
}

export default SearchResultRightBox;
