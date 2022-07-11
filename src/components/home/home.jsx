import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './home.module.css';

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <a
        type='button'
        onClick={() => {
          navigate('/google');
        }}
      >
        google login
      </a>
    </div>
  );
};

export default Home;
