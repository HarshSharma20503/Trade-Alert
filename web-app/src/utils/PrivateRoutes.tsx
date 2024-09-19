import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import React from "react";

const PrivateRoutes: React.FC = () => {
  const userInfo = localStorage.getItem("user");

  return userInfo ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
