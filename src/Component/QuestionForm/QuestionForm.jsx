// src/Components/QuestionForm/QuestionForm.jsx
import React, { useState } from "react";

function QuestionForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기서 데이터를 처리하거나 전송하는 작업을 수행할 수 있습니다.
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        // 폼 제출 후 입력된 값 초기화
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div style={{
            backgroundColor: '#FFFFFF', // 민트색 배경
            borderRadius: '40px', // 모서리 반지름 설정
            width: '400px', // 너비 
            height: '780px', // 화면의 세로 절반에서 20px만큼 뺀 크기
            display: 'flex', // Flexbox 모델 사용
            flexDirection: 'column', // 수직 방향으로 배열
            justifyContent: 'space-around', // 요소들을 여유 공간으로 정렬
            border: '3px solid #92baff', // 모서리에 하늘색 선 추가
            padding: '20px', // 내부 여백 추가
        }}>
            <h3 style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '5px', marginTop: '0', flex: '1' }}>질문이 있으신가요?</h3>
            <h4 style={{ color: '#888', marginBottom: '10px', marginTop: '0', flex: '1' }}>이름, 이메일과 질문을 보내주세요.</h4>
            <form onSubmit={handleSubmit} style={{ width: '95%', flex: '6' }}>
                <input 
                    type="text" 
                    placeholder="이름" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    style={{ marginBottom: '10px', width: '100%', padding: '10px', backgroundColor: '#f2f2f2', borderRadius: '5px', border: 'none' }}
                />
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    style={{ marginBottom: '10px', width: '100%', padding: '10px', backgroundColor: '#f2f2f2', borderRadius: '5px', border: 'none' }}
                />
                <textarea 
                    placeholder="질문을 입력하세요." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    style={{ marginBottom: '20px', width: '100%', minHeight: '300px', padding: '10px', backgroundColor: '#f2f2f2', borderRadius: '5px', border: 'none', resize: 'none' }}
                ></textarea>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#92baff', color: '#fff', border: 'none', borderRadius: '40px' }}>메세지 전송</button>
            </form>
        </div>
    );
}

export default QuestionForm;
