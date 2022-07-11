import React from 'react';
import {useNavigate} from 'react-router-dom';
//import styles from './home.module.css'

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1> Home</h1>
      <button
        onClick={() => {
          navigate('/google');
        }}
      >
        go to google login
      </button>
    </>
  );
};

export default Home;
