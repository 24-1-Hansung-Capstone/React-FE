import axios from "axios";
import React, { useState } from "react";
import * as _ from "./style";
import logo from '../../Asset/Logo.png';

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setUserEmail(value);
    } else if (name === "password") {
      setUserPassword(value);
    }
  };

  return (
    <_.LoginContainer>
      <_.Logo><img src={logo} alt="Logo" height="120"/></_.Logo>
      <_.LoginForm> 
        <h2>로그인</h2>
        <_.LoginInput
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요"
          onChange={handleInputChange}
        />
        <_.LoginInput
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleInputChange}
        />
        <_.LoginButton>로그인</_.LoginButton>
      </_.LoginForm>
    </_.LoginContainer>
  );
}; 
export default LoginPage;