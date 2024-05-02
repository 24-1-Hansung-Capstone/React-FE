// src/Components/SearchResultPage/SearchResultRightBoxChattingLog.jsx
import React, { useState, useRef, useEffect } from "react";
import OnlyLogo from '../../Asset/OnlyLogo.png';
import { BiSolidFace  } from "react-icons/bi";
import style from "./style/SearchResultRightBoxChattingLogStyle"
import { getChatAnswer } from "../ShareFolder/api";

const SearchResultRightBoxChattingLog = ({AI_Text, userMessages}) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        // getChatAnswer(currentMessage, "chat", res => setUserMessages([...userMessages, res]));
        // console.log(userMessages)
        // setIsInputable(true)
    }, [userMessages]);



    return (
        <div style={style.chattingLogs} >
            
            <div>
                <p style={style.summary}>{AI_Text}</p>
                {/* <img src={OnlyLogo} alt="Logo" style={style.logo} /> */}
            </div>

            <div style={style.botResponse}>
                <img src={OnlyLogo} alt="Logo" style={style.logo} />
                <p>요약 결과입니다.</p>
            </div>

            {userMessages.map((message, index) => (
                <div key={index} style = {{}}>
                    <div style={style.userQuestion}>
                        <BiSolidFace />
                        <p>{message}</p>
                    </div>

                    <div style={style.botResponse}>
                        <img src={OnlyLogo} alt="Logo" style={style.logo} />
                        <p>No Response</p>
                    </div>
                </div>
            ))}

            <div ref={messagesEndRef} />

        </div>
    )
}

export default SearchResultRightBoxChattingLog