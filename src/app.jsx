// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './app.css';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {authFire} from './service/firebase';
import {auth} from './service/firebase';

function App() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <div className='App'>
      <header>
        <h1>Login</h1>
        <input type='text' className='ba b--dark-red bw2' placeholder='email...' onChange={(e) => setLoginEmail(e.target.value)} required />
        <br />
        <br />
        <input type='text' className='ba b--dark-red bw2' placeholder='password...' onChange={(e) => setLoginPassword(e.target.value)} />
        <br />
        <a className='mv3 f6 link dim ba bw2 ph3 pv2 mb2 dib dark-blue' onClick={login}>
          Login
        </a>
        {error.length !== 0 && (
          <div>
            <p>가입해 주세요</p> <h1>Register</h1>
            <input type='text' className='ba b--dark-red bw2' placeholder='email' onChange={(e) => setRegisterEmail(e.target.value)} />
            <br />
            <br />
            <input type='text' className='ba b--dark-red bw2' placeholder='password' onChange={(e) => setRegisterPassword(e.target.value)} />
            <br />
            <a className='mv3 f6 link dim ba bw2 ph3 pv2 mb2 dib dark-red' onClick={register}>
              Regiter
            </a>
          </div>
        )}

        {user?.email && (
          <div>
            <p>{user.email}</p>이메일 주소로 입장 하셨습니다. 계속 하시려면 다음 링크를 눌러주세요.
            <a href='https://especialist.org/icanmart'>i.CANMART 입장</a>
            <br />
            <button className='f6 link dim ba bw2 ph3 pv2 mb2 dib dark-pink' type='text' placeholder='logout' onClick={logout}>
              Log out
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
