import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const auth = useSelector((state) => state.auth);

  return auth.account ? <>{children}</> : <Navigate to="/login/" />;
}

export default ProtectedRoute;
