import React, { useState, useEffect } from "react";
import SearchResultRightBoxChattingLog from "./SearchResultRightBoxChattingLog";
import SearchResultRightBoxInput from "./SearchResultRightBoxInput";
import style from "./style/SearchResultRightBoxStyle";
import { getSummary } from "../ShareFolder/api";

function SearchResultRightBox({ searchTerm, searchResults }) {
  const [summary, setSummary] = useState(["요약중..."]);
  const [userMessages, setUserMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isInputable, setIsInputable] = useState(true);

  useEffect(() => {
    setSummary(["요약중..."]);
    getSummary("nlpModel/summary", (res) => {
      setSummary(res);
    });
  }, [searchResults]);

  return (
    <div style={style.rightBox}>
      <section>
        <div style={style.searchTerm}>
          <p>{searchTerm}</p>
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
