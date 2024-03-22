import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Publicroutes = () => {
  const token = localStorage.getItem("accessToken");

  return token ? <Navigate to="/" /> : <Outlet />;
};

export default Publicroutes;
