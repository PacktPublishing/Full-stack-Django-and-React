import React from "react";
import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import SinglePost from "./pages/SinglePost";
import Profile from "./pages/Profiile";
import UpdateProfile from "./pages/UpdateProfile";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/post/:postId/"
                element={
                    <ProtectedRoute>
                        <SinglePost/>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/profile/:profileId/"
                element={
                    <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/profile/:profileId/edit/"
                element={
                    <ProtectedRoute>
                        <UpdateProfile/>
                    </ProtectedRoute>
                }
            />
            <Route path="/login/" element={<Login/>}/>
            <Route path="/register/" element={<Registration/>}/>
        </Routes>
    );
}

export default App;
