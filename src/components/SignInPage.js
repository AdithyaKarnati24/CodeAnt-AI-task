import React, { useState } from "react";
import "./SignInPage.css";
import { FaGithub, FaBitbucket, FaGitlab } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";

import logo from './assets/logo.png';
const SignInPage = ({ onSignIn }) => {
  const [isSaas, setIsSaas] = useState(true);

  const handleToggle = (option) => {
    setIsSaas(option === "saas");
  };

  return (
    <div className="signin-container">
    <div className="signin-left">
      <div className="left-box">
      <div className="left-header">
            <img
              src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=1743033600&v=beta&t=HUO2uXxCUnk5tujVPb0CG17APot2c89tJRoctPeAI9A"
              alt="CodeAnt AI Logo"
              className="left-logo"
            />
            <h1>AI to Detect & Autofix Bad Code</h1>
          </div> 
             <div className="stats">
          <p><strong>30+ Language Support</strong></p>
          <p><strong>10K+ Developers</strong></p>
          <p><strong>100K+ Hours Saved</strong></p>
          <p>
            <strong>Issues Fixed:</strong> 500K+ <span className="growth">↑ 14% This week</span>
          </p>
        </div>
      </div>
      <img src={logo} alt="Logo" className="left-logo-bottom" />
    </div>
    <div className="signin-right">
      <div className="signin h">
          <div className="sign">
  <div className="brand">
    <img
      src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=1743033600&v=beta&t=HUO2uXxCUnk5tujVPb0CG17APot2c89tJRoctPeAI9A"
      alt="CodeAnt AI Logo"
    />
    <h1>CodeAnt AI</h1>
  </div>
  <div className="hi">
    <h2>Welcome to CodeAnt AI</h2>
    <div className="toggle-buttons">
      <button
        className={isSaas ? "active" : ""}
        onClick={() => handleToggle("saas")}
      >
        SAAS
      </button>
      <button
        className={!isSaas ? "active" : ""}
        onClick={() => handleToggle("self-hosted")}
      >
        Self Hosted
      </button>
    </div>
  </div>
  </div>
  </div>
  <div className="signin-options">
    {isSaas ? (
      <>
        <button onClick={onSignIn} className="signin-button">
          <FaGithub className="icon1" /> Sign in with GitHub
        </button>
        <button onClick={onSignIn} className="signin-button">
          <FaBitbucket className="icon2" /> Sign in with Bitbucket
        </button>
        <button onClick={onSignIn} className="signin-button">
          <FaCloud className="icon3" /> Sign in with Azure DevOps
        </button>
        <button onClick={onSignIn} className="signin-button">
          <FaGitlab className="icon4" /> Sign in with GitLab
        </button>
      </>
    ) : (
      <>
        <button onClick={onSignIn} className="signin-button">
          <FaGitlab className="icon4" /> Self-Hosted GitLab
        </button>
        <button onClick={onSignIn} className="signin-button">
          <IoKeyOutline className="icon5 " />  Sign in with SSO
        </button>
      </>
    )}
  </div>
  <p className="privacy-policy">
          By signing up you agree to the <strong>Privacy Policy</strong>
        </p>
</div>
  </div>
    );
};

export default SignInPage;

