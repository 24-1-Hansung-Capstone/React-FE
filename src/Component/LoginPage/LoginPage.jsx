import React, { useState, useEffect } from "react";
import MenuBar from "../ShareFolder/Menubar";
import { Link, useNavigate } from "react-router-dom";
import * as _ from "./style";
import logo from '../../Asset/Logo.png';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setPersistence, browserSessionPersistence, onAuthStateChanged } from "firebase/auth";
import { authService } from '../../firebase/fbInstance';


const LoginPage = ({ setIsLoggedIn, isLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const toggleAccount = () => setNewAccount((prev) => !prev);


  useEffect(() => {
    setPersistence(authService, browserSessionPersistence)
    .then(() => {
      onAuthStateChanged(authService, (user) => {
        if (user) {
          sessionStorage.setItem("isLoggedIn", "true");
          sessionStorage.setItem("userData", JSON.stringify(user));
          setIsLoggedIn(true);
          setUserData(user);
        } else {
          sessionStorage.removeItem("isLoggedIn");
          sessionStorage.removeItem("userData");
          setIsLoggedIn(false);
          setUserData(null);
        }
      });
    })
    .catch((error) => {
      console.error("Error setting persistence:", error);
    });
}, [setIsLoggedIn]);

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

  const handleSuccessfulLogin = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userData", JSON.stringify(user));
    navigate('/');
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authService, provider)
      .then((result) => handleSuccessfulLogin(result.user))
      .catch((err) => {
        console.log(err);
        setError("오류가 발생했습니다");
        setIsLoggedIn(false);
      });
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
        </_.LoginForm>
      </_.LoginContainer>
    </div>
  );
};

export default LoginPage;
