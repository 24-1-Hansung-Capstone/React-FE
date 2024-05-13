import axios from "axios";
import React, { useState } from "react";
import MenuBar from "../ShareFolder/Menubar";
import { Link } from "react-router-dom";
import * as _ from "./style";
import logo from '../../Asset/Logo.png';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { authService } from '../../firebase/fbInstance';
import app from '../../firebase/fbInstance';




const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState('');
    const [userData, setUserData] = useState(null);

    const toggleAccount = () => setNewAccount((prev) => !prev)
    const onChange = (e) => {
        const { target: { name, value } } = e;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let data ;
        try {
            if(newAccount) data = await createUserWithEmailAndPassword(authService, email, password);
            else data = await signInWithEmailAndPassword(authService, email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    function handleGoogleLogin() {
      const provider = new GoogleAuthProvider(); // provider를 구글로 설정
      signInWithPopup(authService, provider) // popup을 이용한 signup
        .then((data) => {
          setUserData(data.user); // user data 설정
          console.log(data) // console로 들어온 데이터 표시
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return (
      <div>
        <MenuBar/>
      <_.LoginContainer>
        <Link to="/">
        <_.Logo><img src={logo} alt="Logo" height="120"/></_.Logo>
        </Link>
        <_.LoginForm onSubmit={onSubmit}> 
        <h2>로그인</h2>
                <_.LoginInput
                    name="email"
                    type="text"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={onChange} />
                <_.LoginInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange} />
                <_.LoginInput
                    type="submit"
                    value={newAccount? "회원가입" : "로그인"} />
            <span onClick={toggleAccount}>{newAccount? "회원가입" : "로그인"}</span>
                <_.LoginButton name="Google" onClick={handleGoogleLogin}>Google 로그인</_.LoginButton>
        </_.LoginForm>
        </_.LoginContainer>
        </div>
    )
}

export default LoginPage