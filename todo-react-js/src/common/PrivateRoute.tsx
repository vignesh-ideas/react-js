import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./app-context.tsx";

const PrivateRoute = ({ children }: any) => {
  const { isLoggedIn } = useContext(AppContext);
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
