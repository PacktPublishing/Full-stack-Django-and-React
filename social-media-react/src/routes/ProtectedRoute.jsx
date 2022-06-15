import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const auth = localStorage.getItem("auth");

  return auth.user ? <>{children}</> : <Navigate to="/login/" />;
}

export default ProtectedRoute;
