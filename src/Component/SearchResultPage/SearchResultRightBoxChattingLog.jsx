// src/Components/SearchResultPage/SearchResultRightBoxChattingLog.jsx
import React, { useState, useRef, useEffect } from "react";
import OnlyLogo from '../../Asset/OnlyLogo.png';
import { BiSolidFace } from "react-icons/bi";
import style from "./style/SearchResultRightBoxChattingLogStyle"

const SearchResultRightBoxChattingLog = ({title, AI_Text, userMessages}) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        // getChatAnswer(currentMessage, "chat", res => setUserMessages([...userMessages, res]));
        // console.log(userMessages)
        // setIsInputable(true)
        console.log(`${userMessages}`);

        // getChatAnswer(currentMessage, "chat", res => setUserMessages([...userMessages, res]));
        // console.log(userMessages);
        // setIsInputable(true);

    }, [userMessages]);



    return (
        <div style={style.chattingLogs} >
            {AI_Text && Array.isArray(AI_Text) && AI_Text.map((item, idx) => (
                <div key={idx}>
                    <li>{title && title[idx]}</li>
                    <li>{item}</li>
                </div>
            ))}

            {userMessages.map((message, index) => (
                <div key={index} style = {{}}>
                    { index % 2 === 0 ? (
                        <div style={style.userQuestion}>
                            <BiSolidFace />
                            <p>{message}</p>
                        </div>
                    ) : (
                        <div style={style.botResponse}>
                            <img src={OnlyLogo} alt="Logo" style={style.logo} />
                            <p>{message}</p>
                        </div>
                    )}
                </div>
            ))}

            <div ref={messagesEndRef} />

        </div>
    )
}

export default SearchResultRightBoxChattingLog