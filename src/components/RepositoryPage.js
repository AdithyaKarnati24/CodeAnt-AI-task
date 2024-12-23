import React, { useState } from "react";
import { FaChevronDown, FaShieldAlt, FaQuestionCircle, FaCogs, FaSignOutAlt, FaHeadset } from "react-icons/fa";
import { HiCloud, HiHome } from "react-icons/hi2";
import "./RepositoryPage.css";
import { FiDatabase } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { FiRefreshCw } from "react-icons/fi";

function RepositoryPage() {
  const [repositories, setRepositories] = useState([
    { name: "design-system", language: "React", size: "7320 KB", updated: "1 day ago", isPublic: true },
    { name: "codeant-ci-app", language: "Javascript", size: "5871 KB", updated: "2 days ago", isPublic: false },
    { name: "analytics-dashboard", language: "Python", size: "4521 KB", updated: "5 days ago", isPublic: false },
    { name: "mobile-app", language: "Swift", size: "3096 KB", updated: "3 days ago", isPublic: true },
    { name: "e-commerce-platform", language: "Java", size: "6210 KB", updated: "6 days ago", isPublic: false },
    { name: "blog-website", language: "HTML/CSS", size: "1877 KB", updated: "4 days ago", isPublic: true },
    { name: "social-network", language: "PHP", size: "5432 KB", updated: "7 days ago", isPublic: false },
  ]);

  const refreshRepositories = () => {
    setRepositories(repositories.map(repo => ({
      ...repo,
      updated: `${Math.floor(Math.random() * 7) + 1} day${Math.random() > 0.5 ? "s" : ""} ago`
    })));
  };

  return (
    <div className="repository-page">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img
            src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=1743033600&v=beta&t=HUO2uXxCUnk5tujVPb0CG17APot2c89tJRoctPeAI9A"
            alt="CodeAnt AI Logo"
          />
          <h2>CodeAnt AI</h2>
        </div>
        <div className="username">
            KarnatiAdithya@24 <FaChevronDown />
        </div>
        <nav>
          <ul>
            <li>
              <HiHome className="icon" /> Repositories
            </li>
            <li>
              <FaShieldAlt className="icon" /> AI Code Review
            </li>
            <li>
              <HiCloud className="icon" /> Cloud Security
            </li>
            <li>
              <FaQuestionCircle className="icon" /> How to Use
            </li>
            <li>
              <FaCogs className="icon" /> Settings
            </li>
          </ul>
        </nav>
        <footer>
          <button className="footer-button">
            <FaHeadset className="icon" /> Support
          </button>
          <button className="footer-button" onClick={() => window.location.href = 'SignInPage.js'}>
            <FaSignOutAlt className="icon" /> Logout
          </button>
        </footer>
      </aside>
      <main className="repository-content">
        <header>
          <h2>Repositories</h2>
        
    <div className="header-actions">
      <div className="search-container">
        <GoSearch className="search-icon" />
        <input type="text" placeholder="Search Repositories" />
    </div>
      <div className="refresh-container">
    <button onClick={refreshRepositories}>
      <FiRefreshCw className="refresh-icon" />
      Refresh All
    </button>
  </div>
  <button>+ Add Repository</button>
</div>



        </header>
        <ul className="repository-list">
          {repositories.map((repo, index) => (
            <li key={index} className={repo.isPublic ? "public-repo" : "private-repo"}>
             <h3 className="repo-title">
        {repo.name}
        <span className={`repo-type ${repo.isPublic ? "public-design" : "private-design"}`}>
          {repo.isPublic ? "public" : "private"}
        </span>
      </h3>
              <p className="repo-details">
                {repo.language}<GoDotFill className="icon1"/><FiDatabase /> {repo.size} <div className="icon2"/>updated {repo.updated}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default RepositoryPage;



