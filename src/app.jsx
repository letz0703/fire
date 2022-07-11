// import React from 'react';
import './app.css';
import {BrowserRouter, Routes, Route, Link, userNavigate, Navigate} from 'react-router-dom';
import LoginGoogle from './components/login_google/login_google';
import Home from './components/home/home';
import LoginEmail from './service/login_email';
// import GoogleLogin from './service/google';

function App() {
  return (
    <div>
      <h1>
        Hello World
        <button
          onClick={() => {
            Navigate('/google');
          }}
        >
          Login Google
        </button>
        <BrowserRouter>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/google'>Google</Link>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/google' element={<LoginGoogle />} />
          </Routes>
        </BrowserRouter>
      </h1>

      <LoginEmail />
      {/* <GoogleLogin /> */}
    </div>
  );
}

export default App;
