// src/Components/SearchResultPage/SearchResultRightBoxChattingLog.jsx
import React, { useState, useRef, useEffect } from "react";
import NewLogo from '../../Asset/NewLogo.png';
import { BiSolidFace } from "react-icons/bi";
import style from "./style/SearchResultRightBoxChattingLogStyle"
import { Link } from "react-router-dom";

const SearchResultRightBoxChattingLog = ({ AI_Text, userMessages }) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [userMessages]);

    return (
        <div style={style.chattingLogs} >


            {userMessages.map((message, index) => (
                <div key={index} style = {{}}>
                    { index % 2 === 0 ? (
                        <div style={style.userQuestion}>
                            <BiSolidFace />
                            <p>{message}</p>
                        </div>
                    ) : (
                        <div style={style.botResponse}>
                            <img src={NewLogo} alt="Logo" style={style.logo} />
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