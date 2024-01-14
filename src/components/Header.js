import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Header = ({ onChangeLanguage }) => {
  const [isDarkened, setIsDarkened] = useState(false);
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = (text) => {
    setTranslatedText(text);
  };

  const handleToggleBackground = () => {
    setIsDarkened((prev) => !prev);
  
    document.body.style.backgroundColor = isDarkened ? '#fff' : '#000';
    document.body.style.color = isDarkened ? '#000' : '#fff';
  };

  return (
    <div className="header-container">
      <div className="logo">wwe</div>
      <div className="nav-container">
        <div className="language-select">
          <label htmlFor="language">Language:</label>
          <select id="language" onChange={(e) => onChangeLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="ka">Georgian</option>
          </select>
        </div>
        <div className="buttons-container">
          <button className="header-button" onClick={handleToggleBackground}>
            {translatedText || 'Toggle Background'}
          </button>
          <Link to="/LoginPage" className="header-button login-button">
            Go to Login Page
          </Link>
          <Link to="/" className="header-button register-button">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;