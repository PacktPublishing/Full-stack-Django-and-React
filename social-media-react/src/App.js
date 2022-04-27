import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="/login/" element={<div>Login</div>} />
      <Route path="/register/" element={<Registration />} />
    </Routes>
  );
}

export default App;
