import React, { useState, useRef, useEffect } from "react";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";
import SearchResultRightBoxChattingLog from "./SearchResultRightBoxChattingLog";
import SearchResultRightBoxInput from "./SearchResultRightBoxInput";

function SearchResultRightBox({ searchTerm }) {
    const AI_Text = "아 집가고 싶다.";

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
