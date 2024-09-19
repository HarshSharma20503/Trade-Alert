import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/homePage/HomePage";
import Navbar from "./components/navbar/Navbar";
import LoginPage from "./pages/authPage/LoginPage";
import SignUpPage from "./pages/authPage/SignUpPage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import PrivateRoutes from "./utils/PrivateRoutes";

// Since App is a functional component, we can use the FC type from React
const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
