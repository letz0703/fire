// import React from 'react';
import './app.css';
import {BrowserRouter, Routes, Route, Link, userNavigate, Navigate} from 'react-router-dom';
import LoginGoogle from './components/login_google/login_google';
import Home from './components/home/home';
import LoginEmail from './service/login_email';
// import GoogleLogin from './service/google';

function App() {
  return (
    <div className='pages'>
      <BrowserRouter>
        <LoginEmail />
        {/* <nav>
          <Link to='/google' className='link'>
            Google
          </Link>
        </nav> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/google' element={<LoginGoogle />} />
        </Routes>
      </BrowserRouter>

      {/* <GoogleLogin /> */}
    </div>
  );
}

export default App;
