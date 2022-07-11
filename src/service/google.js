import {getAuth, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';
// https://firebase.google.com/docs/auth/web/google-signin

import React from 'react';

export default function GLogin() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithRedirect(auth, provider);
  return <div>google</div>;
}
