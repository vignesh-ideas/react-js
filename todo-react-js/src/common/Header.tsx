import React, { memo, useContext } from "react";
import Profile from "./Profile.tsx";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./app-context.tsx";

const Header = ({ } : any) => {
  const { logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="profile-container" onClick={handleLogout} style={{ cursor: "pointer" }}>
      <div className="right-profile">
        <Profile />
      </div>
    </div>
  );
};

export default memo(Header);