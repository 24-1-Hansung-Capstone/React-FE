import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30 0px;
`;

export const LoginInput = styled.input`
  width: 80%;
  height: 40px;
  border: 0.5px solid gray;
  margin-top: 20px;
`;

export const LoginButton = styled.button`
  width: 80px;
  height: 40px;
  border: 0.5px solid gray;
  margin-bottom: 20px;
  background-color: darkblue;
  color: white;
  margin-top: 40px;
`;