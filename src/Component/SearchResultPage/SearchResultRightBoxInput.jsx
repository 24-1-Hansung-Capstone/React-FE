// src/Component/SearchResultPage/SearchResultRightBoxInput.jsx
import React from "react";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";

function SearchResultRightBoxInput({currentMessage, setCurrentMessage, userMessages, setUserMessages}) {
    const handleMessageSend = () => {
        if (currentMessage.trim() === "") return; // Do nothing if the message is empty
        setUserMessages([...userMessages, currentMessage]);
        setCurrentMessage("");
    };


    return (
        <div>
            <textarea style={{...PageStyles.ChatbotInput, ...ComponentStyles.ChatbotInput}}
                placeholder="텍스트를 입력하세요"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault(); // 엔터키 입력을 막음
                        handleMessageSend(); // Enter 키를 눌렀을 때 handleMessageSend 함수 호출
                    }
                }}
            ></textarea>

            <div style={{...PageStyles.ChatSendMessageArea, ...ComponentStyles.ChatSendMessageArea}}>
                <button style={{...PageStyles.ChatMessageButton, ...ComponentStyles.ChatSendMessageArea}} onClick={handleMessageSend}>메시지 전송</button>
            </div>
        </div>
    )
}


export default SearchResultRightBoxInput;