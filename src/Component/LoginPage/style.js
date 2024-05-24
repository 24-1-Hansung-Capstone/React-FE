import styled from "styled-components";

export const LoginContainer = styled.div`
min-height: 100vh; /* 화면 전체 높이 */
display: flex;
flex-direction: column; /* 로고와 폼을 세로로 배치 */
justify-content: center;
align-items: center;
background-color: #BFDEE0;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px; /* 로고와 회원가입 폼 간의 간격 조정 */ 
`;

export const LoginForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: white;
  border: 1px solid #BFDEE0;
  border-radius: 5px;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  background-color: #5F9EA0;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-Size : 22px;

  &:hover {
    background-color: #4E8A8C;
  }
`;
