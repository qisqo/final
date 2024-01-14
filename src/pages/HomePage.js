import React, { useState, useEffect } from 'react';
import wweBelt from '../animations/wwe-belt.png'; 
import '../styles/styles.css';

const HomePage = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('animate-belt');
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="welcome-section">
        <img src={wweBelt} alt="WWE Belt" className={`wwe-belt ${animationClass}`} />
        <h1>Welcome to John Cena's Page</h1>
        <p>Of course, you can't see him! DUH</p>
        {}
      </div>
    </div>
  );
};

export default HomePage;