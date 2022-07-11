// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './app.css';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {authFire} from './service/firebase';
import {auth} from './service/firebase';

function App() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [user, setUser] = useState({});

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='App'>
      <header>
        <h1>Log In</h1>
        <input type='text' className='ba b--dark-red bw2' placeholder='email...' onChange={(e) => setRegisterEmail(e.target.value)} />
        <br />
        <br />
        <input type='text' className='ba b--dark-red bw2' placeholder='password...' onChange={(e) => setRegisterPassword(e.target.value)} />
        <br />
        <a className='mv3 f6 link dim ba bw1 ph3 pv2 mb2 dib dark-red' onClick={register}>
          Register
        </a>
      </header>
    </div>
  );
}

export default App;
