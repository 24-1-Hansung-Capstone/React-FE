import React, { useState, useRef, useEffect } from "react";
import OnlyLogo from '../../Asset/OnlyLogo.png';
import ShareStyles from "../../Asset/ShareStyles/ShareStyles";
import { BiSolidFace  } from "react-icons/bi";

function SearchResultRightBoxChattingLog({AI_Text, userMessages}) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [userMessages]);



    return (
        <div style={ShareStyles.ChatTextarea}>
            <div>
                <img src={OnlyLogo} alt="Logo" style={{ width: "50px", height: "50px" }} />
                <p style={{ fontSize: "20px" }}>{AI_Text}</p>
            </div>
            {userMessages.map((message, index) => (
                <div key={index}>
                    <div style={ShareStyles.ChatQuestion}>
                        <BiSolidFace />
                        {message}
                    </div>
                    <div style={ShareStyles.ChatAnswer}>
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