import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../../store/context/LoginContext";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, role } = useContext(LoginContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
