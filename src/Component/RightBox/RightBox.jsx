// src/Components/RightBox/RightBox.jsx
import React from "react";
import ShareStyles from "../ShareStyles/ShareStyles";
import OnlyLogo from '../../Asset/OnlyLogo.png';

function RightBox({ searchTerm }) {
    const AI_Text = "보문역(保文譯)은 중국의 한 번역 방법론으로, 문학적이고 철학적인\n 텍스트의 번역에 주로 사용됩니다. 이 방법은 주로 한자로 쓰여진\n 중국의 고전문학을 다른 언어로 번역할 때 사용되며, 특히 중국의\n 고전 문학을 서양 언어로 번역할 때 많이 적용됩니다.\n";
    return (
        <div>
            <div style={ShareStyles.RightBox}>
                <section style={ShareStyles.section}>
                    <div>                     
                        <p style={{ textAlign: "left", color: "blue", fontSize : "40px" }}>{searchTerm}</p>
                    </div>
                    <div style={ShareStyles.textarea1}>
                        <img src={OnlyLogo} alt="Logo" style={{  width: "50px", height: "50px" }} />
                        {/* 1. 텍스트가 들어갈 자리 */}
                        <p>{AI_Text}</p>
                        </div>
                        <div style={ShareStyles.textarea2}>
                        <textarea placeholder="텍스트를 입력하세요" style={ShareStyles.textarea2Style}></textarea>
                    </div>
                    <div style={ShareStyles.buttonArea}>
                        {/* 3. 메세지 전송 버튼 */}
                        <button style={ShareStyles.button}>메시지 전송</button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default RightBox;
