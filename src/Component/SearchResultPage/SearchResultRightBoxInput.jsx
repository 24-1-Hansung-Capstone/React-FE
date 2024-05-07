// src/Component/SearchResultPage/SearchResultRightBoxInput.jsx
import React, { useState } from "react";
import style from "./style/SearchResultRightBoxInputStyle"
import { getChatAnswer } from "../ShareFolder/api";

const SearchResultRightBoxInput = ({currentMessage, setCurrentMessage, setUserMessages, isInputable, setIsInputable}) => {

    
    const handleMessageSend = () => {
        if (currentMessage.trim() === "") return;
        
        console.log(`clicked! msg:${currentMessage}`)
        
        setIsInputable(false);
        setUserMessages(prev => [...prev, currentMessage]);
        setCurrentMessage("");
        
        console.log("어 형이 부른거 맞아~");
        getChatAnswer(currentMessage, res => {
            setUserMessages(prev => [...prev, res])
            setIsInputable(true);
            setCurrentMessage("");
        });
    };


    return (
        <div>
            <textarea style={style.inputArea}
                placeholder="텍스트를 입력하세요"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (isInputable && e.key === 'Enter') {
                        e.preventDefault(); // 엔터키 입력을 막음
                        handleMessageSend(); // Enter 키를 눌렀을 때 handleMessageSend 함수 호출
                    }
                }}
            />
            <button style={style.sendButton} onClick={handleMessageSend} disabled={!isInputable}>메시지 전송</button>
        </div>
    )
}


export default SearchResultRightBoxInput;