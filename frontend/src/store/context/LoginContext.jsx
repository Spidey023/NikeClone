import { createContext, useState } from "react";

export const LoginContext = createContext({
  isAuthenticated: false,
  role: undefined,
  login: () => {},
  logout: () => {},
});

export const LoginContextProvider = ({ children }) => {
  const storedCredentials = localStorage.getItem("credentials") || {};

  const [isAuthenticated, setIsAuthenticated] = useState(
    storedCredentials.isAuthenticated || false
  );
  const [role, setRole] = useState(storedCredentials.role || undefined);

  const login = (role) => {
    setIsAuthenticated(true);
    setRole(role);
    localStorage.setItem(
      "credentials",
      JSON.stringify({ isAuthenticated: true, role })
    );
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("credentials");
  };

  return (
    <>
      <LoginContext.Provider value={{ isAuthenticated, role, login, logout }}>
        {children}
      </LoginContext.Provider>
    </>
  );
};
