import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './login_google.module.css';
import {getAuth, getRedirectResult, GoogleAuthProvider} from 'firebase/auth';
import GLogin from '../../service/google';

export default function LoginGoogle() {
  const auth = getAuth();
  getRedirectResult(auth)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = credential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });

  // const navigate = useNavigate();
  return (
    <div>
      <GLogin />
    </div>
  );
}
