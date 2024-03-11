import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protectedroutes = () => {
  const token = JSON.parse(localStorage.getItem("accessToken"));

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default Protectedroutes;
