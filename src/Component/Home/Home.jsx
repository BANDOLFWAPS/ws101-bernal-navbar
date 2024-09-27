import React from 'react';
import './Home.css';
import logos from './ramons.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="intro">
        <h1>Ramon Bernal</h1>
        <h2>BSIT-3B</h2>
        <img src={logos} alt="Ramon Bernal" className="profile-pic" />
        <p>
          Welcome to my portfolio! I am passionate about technology, web development, and programming. 
          Explore my work and feel free to get in touch.
        </p>
      </div>
    </div>
  );
}

export default Home;
