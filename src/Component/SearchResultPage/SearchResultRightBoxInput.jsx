import React, { useState, useRef } from "react";
import style from "./style/SearchResultRightBoxInputStyle";
import { getChatAnswer } from "../ShareFolder/api";

const SearchResultRightBoxInput = ({ currentMessage, setCurrentMessage, setUserMessages, isInputable, setIsInputable }) => {
    const textareaRef = useRef(null);

    const handleMessageSend = () => {
        if (currentMessage.trim() === "") return;

        setIsInputable(false);
        setUserMessages(prev => [...prev, currentMessage]);
        setCurrentMessage("");

        getChatAnswer(currentMessage, res => {
            setUserMessages(prev => [...prev, res]);
            setIsInputable(true);
            setCurrentMessage("");
            textareaRef.current.focus();
        },
        res => {
            setUserMessages(prev => [...prev, res]);
            setCurrentMessage("");
            textareaRef.current.focus();
        });
    };

    return (
        <div>
            <textarea
                ref={textareaRef}
                style={style.inputArea}
                placeholder="텍스트를 입력하세요"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (isInputable && e.key === 'Enter') {
                        e.preventDefault(); // 엔터키 입력을 막음
                        handleMessageSend(); // Enter 키를 눌렀을 때 handleMessageSend 함수 호출
                    }
                }}
                disabled={!isInputable}
            />
            <button
                style={style.sendButton}
                onClick={handleMessageSend}
                disabled={!isInputable}
            >
                메시지 전송
            </button>
        </div>
    );
}

export default SearchResultRightBoxInput;
