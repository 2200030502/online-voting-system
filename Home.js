import React from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  
  const handleStartForFreeClick = () => {
    navigate('/Login');
  };
  return (
    <div className='backgroundcolor'>
      <div>
              <img src='./image/3.jpg' className='image6' />
      </div>
      <br />
      <br />

    </div>
  );
}

export default Home;
