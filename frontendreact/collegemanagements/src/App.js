

import React, { createContext, useContext, useState } from "react";
import LoginSignUp from './components/LoginSignUp/LoginSignUp';

// Global context for authentication
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function App() {
  const [auth, setAuth] = useState({ isLoggedIn: false, role: "" });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <LoginSignUp />
    </AuthContext.Provider>
  );
}

export default App;
