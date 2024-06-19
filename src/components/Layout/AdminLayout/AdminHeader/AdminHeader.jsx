import React from 'react';
import Logo from "../../../../assets/images/logo.png";
import "./style.scss"
const AdminHeader = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="navbar__menu">
                Menyu
            </div>
        </div>
    );
};

export default AdminHeader;