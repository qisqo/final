import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'; 
import RegistrationPage from './pages/RegistrationPage'; 

const App = () => {
  return (
   
      <Router>
        <Header></Header>
        <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
       <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </Router>
    
    
  );
};

export default App;