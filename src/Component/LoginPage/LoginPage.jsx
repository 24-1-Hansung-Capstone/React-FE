import React, { useState } from "react";
import MenuBar from "../ShareFolder/Menubar";
import { Link, useNavigate } from "react-router-dom";
import * as _ from "./style";
import logo from '../../Asset/Logo.png';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { authService } from '../../firebase/fbInstance';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState('');
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
   

    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onChange = (e) => {
        const { target: { name, value } } = e;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            if (newAccount) await createUserWithEmailAndPassword(authService, email, password);
            else await signInWithEmailAndPassword(authService, email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authService, provider)
            .then((data) => {
                setIsLoggedIn(true); // 로그인 상태를 true로 설정
                setUserData(data.user);
                console.log(data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setError("오류가 발생했습니다");
                setIsLoggedIn(false); // 로그인 상태를 false로 설정
            });
    }

    return (
        <div>
            <MenuBar setIsLoggedIn={setIsLoggedIn} />
            <_.LoginContainer>
                <Link to="/">
                    <_.Logo><img src={logo} alt="Logo" height="120" /></_.Logo>
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
                        value={newAccount ? "회원가입" : "로그인"} />
                    <span onClick={toggleAccount}>{newAccount ? "회원가입" : "로그인"}</span>
                    <_.LoginButton name="Google" onClick={handleGoogleLogin}>Google 로그인</_.LoginButton>
                </_.LoginForm>
            </_.LoginContainer>
        </div>
    )
}

export default LoginPage;
