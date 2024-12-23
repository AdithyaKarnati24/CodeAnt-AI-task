import React, { useState } from "react";
import SignInPage from "./components/SignInPage";
import RepositoryPage from "./components/RepositoryPage";
import "./App.css";
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <div>
      {!isSignedIn ? <SignInPage onSignIn={handleSignIn} /> : <RepositoryPage />}
    </div>
  );
}

export default App;
