import React, { useState, useRef, useEffect } from "react";
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";
import OnlyLogo from '../../Asset/OnlyLogo.png';
import { BiSolidFace  } from "react-icons/bi";

function RightBox({ searchTerm }) {
    const AI_Text = "보문역(保文譯)은 중국의 한 번역 방법론으로, 문학적이고 철학적인 텍스트의 번역에 주로 사용됩니다. 이 방법은 주로 한자로 쓰여진 중국의 고전문학을 다른 언어로 번역할 때 사용되며, 특히 중국의 고전 문학을 서양 언어로 번역할 때 많이 적용됩니다.";

    const [userMessages, setUserMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const messagesEndRef = useRef(null);

    const handleMessageSend = () => {
        if (currentMessage.trim() === "") return; // Do nothing if the message is empty
        setUserMessages([...userMessages, currentMessage]);
        setCurrentMessage("");
    };

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [userMessages]);

    return (
        <div>
            <div style={ShareStyles.RightBox}>
                <section>
                    <div style={ShareStyles.searchResult}>
                        <p>{searchTerm}</p>
                    </div>
                    
                    
                    <div style={ShareStyles.textarea1}>
                        <div>
                            <img src={OnlyLogo} alt="Logo" style={{ width: "50px", height: "50px" }} />
                            <p style={{ fontSize: "20px" }}>{AI_Text}</p>
                        </div>
                        {userMessages.map((message, index) => (
                            <div key={index}>
                                <div style={ShareStyles.chatarea1}>
                                    <BiSolidFace />
                                    {message}
                                </div>
                                <div style={ShareStyles.chatarea2}>
                                <img src={OnlyLogo} alt="Logo" style={{ width: "50px", height: "50px" }} />
                                <p>No Response</p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div>
                        <textarea style={ShareStyles.textarea2}
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
                    </div>
                    <div style={ShareStyles.buttonArea}>
                        <button style={ShareStyles.button} onClick={handleMessageSend}>메시지 전송</button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default RightBox;
