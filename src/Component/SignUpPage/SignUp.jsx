import axios from "axios";
import React, { useState } from "react";
import * as _ from "./SignUpStyle";
import logo from '../../Asset/Logo.png';
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userAddressDetail, setUserAddressDetail] = useState("");


  const handleSignUp = () => {

    const data = {
      userEmail,
      userPassword,
      userPasswordCheck,
      userNickName,
      userAddress,
      userAddressDetail,
    };

    axios
      .post("http://localhost:3000/SignUpPage", data)
      .then((res) => {
        console.log(res);
        alert("회원가입이 완료되었습니다!");
      })
      .catch((err) => {
        console.log(`${err} :: 회원가입 실패`);
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      });
  };

  return (
    <_.SignUpContainer>
      <Link to="/" ><_.Logo><img src={logo} alt="Logo" height="120"/></_.Logo></Link>
      <_.SignUpForm>
      <h2>회원가입</h2>
        <_.SignUpInput
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <_.SignUpInput
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <_.SignUpInput
          type="password"
          name="passwordCheck"
          placeholder="비밀번호를 확인해주세요"
          onChange={(e) => {
            setUserPasswordCheck(e.target.value);
          }}
        />
        <_.SignUpInput
          type="text"
          name="nickname"
          placeholder="닉네임을 입력해주세요"
          onChange={(e) => {
            setUserNickName(e.target.value);
          }}
        />
        <_.SignUpInput
          type="text"
          name="address"
          placeholder="주소를 입력해주세요"
          onChange={(e) => {
            setUserAddress(e.target.value);
          }}
        />
        <_.SignUpInput
          type="text"
          name="addressDetail"
          placeholder="상세주소를 입력해주세요"
          onChange={(e) => {
            setUserAddressDetail(e.target.value);
          }}
        />
        <_.SignUpButton onClick={() => handleSignUp()}>회원가입</_.SignUpButton>
      </_.SignUpForm>
    </_.SignUpContainer>
  );
};

export default SignUp;