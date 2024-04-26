import axios from "axios";
import React, { useState } from "react";
import * as _ from "./SingUpStyle";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userAddressDetail, setUserAddressDetail] = useState("");

  const handleSignUp = () => {
    const data = {
      userEmail,
      userPassword,
      userPasswordCheck,
      userNickname,
      userAddress,
      userAddressDetail,
    };

    axios
      .post("http://localhost:3000/signUp", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(`${err} :: 회원가입 실패`);
      });
  };

  return (
    <_.SignUpContainer>
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
            setUserNickname(e.target.value);
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