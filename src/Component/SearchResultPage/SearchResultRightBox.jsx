import React, { useState, useRef, useEffect } from "react";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";
import SearchResultRightBoxChattingLog from "./SearchResultRightBoxChattingLog";
import SearchResultRightBoxInput from "./SearchResultRightBoxInput";

function SearchResultRightBox({ searchTerm }) {
    const AI_Text = "보문역(保文譯)은 중국의 한 번역 방법론으로, 문학적이고 철학적인 텍스트의 번역에 주로 사용됩니다. 이 방법은 주로 한자로 쓰여진 중국의 고전문학을 다른 언어로 번역할 때 사용되며, 특히 중국의 고전 문학을 서양 언어로 번역할 때 많이 적용됩니다.";

    const [userMessages, setUserMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");

    return (
        <div>
            <div style={ShareStyles.SearchResultRightBox}>
                <section>
                    <div style={ShareStyles.SearchResult}>
                        <p>{searchTerm}</p>
                    </div>
                    <SearchResultRightBoxChattingLog userMessages={userMessages} AI_Text={AI_Text} />
                    <SearchResultRightBoxInput
                        currentMessage={currentMessage} setCurrentMessage={setCurrentMessage} userMessages={userMessages} setUserMessages={setUserMessages} />
                </section>
            </div>
        </div>
    );
}

export default SearchResultRightBox;
