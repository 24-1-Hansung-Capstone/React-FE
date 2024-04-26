import styled from "styled-components";


export const SignUpContainer = styled.div`
  min-height: 100vh; /* 화면 전체 높이 */
  display: flex;
  flex-direction: column; /* 로고와 폼을 세로로 배치 */
  justify-content: center;
  align-items: center;
  background-color: #EBF7FF;
`;

export const LoginLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px; /* 로고와 회원가입 폼 간의 간격 조정 */ 
`;

export const SignUpForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: white;
  border: 1px solid #EBF7FF;
  border-radius: 5px;
`;

export const SignUpInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
`;

export const SignUpButton = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  background-color: darkblue;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: navy;
  }
`;
