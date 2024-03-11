import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Publicroutes = () => {
  const token = JSON.parse(localStorage.getItem("accessToken"));

  return token ? <Navigate to="/" /> : <Outlet />;
};

export default Publicroutes;
