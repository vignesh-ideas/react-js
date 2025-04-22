import React from "react";
import { CgProfile } from "react-icons/cg";
import "./style.css";


const Profile = ({ }: any) => {
    return (
        <div className="profile">
            <CgProfile style={{ fontSize: "40px", color: "black" }} />
        </div>
    )
}

export default Profile;
