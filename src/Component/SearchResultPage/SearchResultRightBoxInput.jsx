import React from "react";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";

function SearchResultRightBoxInput({currentMessage, setCurrentMessage, userMessages, setUserMessages}) {
    const handleMessageSend = () => {
        if (currentMessage.trim() === "") return; // Do nothing if the message is empty
        setUserMessages([...userMessages, currentMessage]);
        setCurrentMessage("");
    };


    return (
        <div>
            <textarea style={ShareStyles.ChatbotInput}
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

            <div style={ShareStyles.ChatSendMessageArea}>
                <button style={ShareStyles.ChatMessageButton} onClick={handleMessageSend}>메시지 전송</button>
            </div>
        </div>
    )
}


export default SearchResultRightBoxInput;