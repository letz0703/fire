// import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  userNavigate,
  Navigate,
} from "react-router-dom";
import Home from "./components/home/home";
import LoginEmail from "./service/login_email";
// import Login from "./components/login/login";
// import GoogleLogin from './service/google';
import "./app.css";

function App({ authService }) {
  return (
    <>
      <div className="app flex flex-col item-center justify-center min-h-screen">
        {/* <Login authService={authService} /> */}
        <LoginEmail />
        {/* <nav> */}
        {/* <Link to='/google' className='link'> */}
        {/* Google */}
        {/* </Link> */}
        {/* </nav> */}
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={Home} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
