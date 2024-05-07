// src/Components/SearchResultPage/SearchResultRightBox.jsx
import React, { useState, useRef, useEffect } from "react";
import SearchResultRightBoxChattingLog from "./SearchResultRightBoxChattingLog";
import SearchResultRightBoxInput from "./SearchResultRightBoxInput";
import style from "./style/SearchResultRightBoxStyle";
import { getChatAnswer, getSummary } from "../ShareFolder/api";

function SearchResultRightBox({ searchTerm, searchResults}) {
    const [summary, setSummary] = useState(["요약중..."]);

    const [userMessages, setUserMessages] = useState([]); // 대화내역
    const [currentMessage, setCurrentMessage] = useState(""); // user 입력
    const [isInputable, setIsInputable] = useState(true);

    useEffect(() => {
        setSummary(["요약중..."]);
        getSummary("nlpModel/summary", res => {
            setSummary(res); // 검색결과를 받아서 재랜더링
        })
    }, [searchResults])

    return (
        <div style={style.rightBox}>
            <section>
                <div style={style.searchTerm}>
                    <p>{searchTerm}</p>
                </div>
                <SearchResultRightBoxChattingLog 
                    userMessages={userMessages}
                    AI_Text={summary} />
                    
                <SearchResultRightBoxInput
                    currentMessage={currentMessage}
                    setCurrentMessage={setCurrentMessage}
                    setUserMessages={setUserMessages}
                    isInputable={isInputable}
                    setIsInputable={setIsInputable} />
            </section>
        </div>
    );
}

export default SearchResultRightBox;

/**
 * 1. 기본 기능
 * 2. AI 데이터를 받았을 때, 최신 데이터는 chatGPT'st 애니메이션 (글자 한번에 똭 보여주는게 아니라, 글자 적어나가듯이)
 */