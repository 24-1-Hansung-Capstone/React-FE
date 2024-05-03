// src/Components/SearchResultPage/SearchResultRightBox.jsx
import React, { useState, useRef, useEffect } from "react";
import SearchResultRightBoxChattingLog from "./SearchResultRightBoxChattingLog";
import SearchResultRightBoxInput from "./SearchResultRightBoxInput";
import style from "./style/SearchResultRightBoxStyle";

function SearchResultRightBox({ searchTerm }) {
    const AI_Text = "아 집가고 싶다.";

    const [userMessages, setUserMessages] = useState([]); // 대화내역
    const [currentMessage, setCurrentMessage] = useState(""); // user 입력
    const [isInputable, setIsInputable] = useState(true);

    return (
        <div style={style.rightBox}>
            <section>
                <div style={style.searchTerm}>
                    <p>{searchTerm}</p>
                </div>
                <SearchResultRightBoxChattingLog 
                    userMessages={userMessages}
                    AI_Text={AI_Text} />
                    
                <SearchResultRightBoxInput
                    currentMessage={currentMessage}
                    setCurrentMessage={setCurrentMessage}
                    userMessages={userMessages}
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