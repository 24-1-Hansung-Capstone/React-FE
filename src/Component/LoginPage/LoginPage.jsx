import React, { useState } from "react";
import MenuBar from "../ShareFolder/Menubar";
import { Link, useNavigate } from "react-router-dom";
import * as _ from "./style";
import logo from '../../Asset/Logo.png';
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { authService } from '../../firebase/fbInstance';


const LoginPage = ({ setIsLoggedIn, isLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const toggleAccount = () => setNewAccount((prev) => !prev);

  const onChange = (e) => {
    const { target: { name, value } } = e;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newAccount) await createUserWithEmailAndPassword(authService, email, password);
      else await signInWithEmailAndPassword(authService, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authService, provider)
      .then((data) => {
        setIsLoggedIn(true);
        setUserData(data.user);
        console.log(data);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        setError("오류가 발생했습니다");
        setIsLoggedIn(false);
      });
  };

  const handleGithubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(authService, provider);
      const user = result.user;
      setIsLoggedIn(true);
      setUserData(user);
      console.log(user);
      navigate('/');
    } catch (error) {
      console.error(error);
      setError("오류가 발생했습니다");
      setIsLoggedIn(false);
    }
  };

  return (
    <div>
      <MenuBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <_.LoginContainer>
        <Link to="/">
          <_.Logo><img src={logo} alt="Logo" height="120" /></_.Logo>
        </Link>
        <_.LoginForm onSubmit={onSubmit}>
          <h2>로그인</h2>
          <_.LoginButton name="Google" onClick={handleGoogleLogin}>Google 로그인</_.LoginButton>
          <_.LoginButton>휴대폰 번호 로그인</_.LoginButton>
          <_.LoginButton name="Github" onClick={handleGithubSignIn}>
            GitHub 로그인
          </_.LoginButton>
        </_.LoginForm>
      </_.LoginContainer>
    </div>
  );
};

export default LoginPage;
