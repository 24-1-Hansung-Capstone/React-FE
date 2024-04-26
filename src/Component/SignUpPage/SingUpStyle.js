import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpForm = styled.form`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;

export const SignUpInput = styled.input`
  width: 80%;
  height: 40px;
  border: 0.5px solid gray;
  margin-top: 20px;
`;

export const SignUpButton = styled.button`
  width: 80px;
  height: 40px;
  border: 0.5px solid gray;
  margin-bottom: 20px;
  background-color: darkblue;
  color: white;
  margin-top: 40px;
`;