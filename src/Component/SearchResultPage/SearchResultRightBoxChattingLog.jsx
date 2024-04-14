// src/Components/SearchResultPage/SearchResultRightBoxChattingLog.jsx
import React, { useState, useRef, useEffect } from "react";
import OnlyLogo from '../../Asset/OnlyLogo.png';
import { BiSolidFace  } from "react-icons/bi";
import PageStyles from "../../Asset/ShareStyles/PageStyles";
import ComponentStyles from "../../Asset/ShareStyles/ComponentStyles";

function SearchResultRightBoxChattingLog({AI_Text, userMessages}) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [userMessages]);



    return (
        <div style={{...PageStyles.ChatTextarea, ...ComponentStyles.ChatTextarea}}>
            <div>
                <img src={OnlyLogo} alt="Logo" style={{ width: "50px", height: "50px" }} />
                <p style={{ fontSize: "20px" }}>{AI_Text}</p>
            </div>
            {userMessages.map((message, index) => (
                <div key={index}>
                    <div style={{...PageStyles.ChatQuestion, ...ComponentStyles.ChatQuestion}}>
                        <BiSolidFace />
                        {message}
                    </div>
                    <div style={{...PageStyles.ChatAnswer, ...ComponentStyles.ChatAnswer}}>
                        <img src={OnlyLogo} alt="Logo" style={{ width: "50px", height: "50px" }} />
                        <p>No Response</p>
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
}

export default SearchResultRightBoxChattingLog