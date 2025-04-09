import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./app-context";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AppContext);
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
