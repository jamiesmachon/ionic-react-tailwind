import React, { createContext, useState, ReactNode, useEffect } from "react";

import { AuthContextType } from "@/interfaces/AuthContextType";
import { AuthUserType } from "@/interfaces/AuthUserType";
import { ProviderPropsType } from "@/interfaces/ProviderPropsType";

// Create the AuthContext with an initial empty object
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<ProviderPropsType> = ({ children }) => {
  const [auth, setAuth] = useState<AuthUserType | {}>({});

  // temporary false authentication
  useEffect(() => {
    // Check if user is logged in
    setAuth({ isAuthenticated: false });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
