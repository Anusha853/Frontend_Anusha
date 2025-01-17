import React, { useState } from 'react';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import '../Styles/AuthPage.css'; // CSS for switch page

function AuthPage() {
  const [isRegistered, setIsRegistered] = useState(false); // To track the state

  const handleSwitchToRegister = () => {
    setIsRegistered(false); // Switch to Register
  };

  const handleSwitchToLogin = () => {
    setIsRegistered(true); // Switch to Login
  };

  return (
    <div className="switch-container">
      <div className="switch-box">
        <div className="switch-tabs">
          <button 
            onClick={handleSwitchToRegister} 
            className={!isRegistered ? 'active-tab' : ''}>
            SignUp
          </button>
          <button 
            onClick={handleSwitchToLogin} 
            className={isRegistered ? 'active-tab' : ''}>
            SignIn
          </button>
        </div>

        {/* Show Register or Login based on isRegistered */}
        {!isRegistered ? (
          <RegisterPage />
        ) : (
          <LoginPage />
        )}
      </div>
    </div>
  );
}

export default AuthPage;
