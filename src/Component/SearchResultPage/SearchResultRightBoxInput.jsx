// src/Component/SearchResultPage/SearchResultRightBoxInput.jsx
import React from "react";
import style from "./style/SearchResultRightBoxInputStyle"

function SearchResultRightBoxInput({currentMessage, setCurrentMessage, userMessages, setUserMessages}) {
    
    const handleMessageSend = () => {
        if (currentMessage.trim() === "") return;
        setUserMessages([...userMessages, currentMessage]);
        setCurrentMessage("");
    };


    return (
        <div>
            <textarea style={style.inputArea}
                placeholder="텍스트를 입력하세요"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault(); // 엔터키 입력을 막음
                        handleMessageSend(); // Enter 키를 눌렀을 때 handleMessageSend 함수 호출
                    }
                }}
            />
            <button style={style.sendButton} onClick={handleMessageSend}>메시지 전송</button>
        </div>
    )
}


export default SearchResultRightBoxInput;