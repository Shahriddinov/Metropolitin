import React from 'react';
import "./home.scss"
import AdminHeader from "../../../../components/Layout/AdminLayout/AdminHeader/AdminHeader";
import Sidebar from "../../../../components/Layout/AdminLayout/Sidebar/Sidebar";
const Home = (props) => {
    const { children } = props;
    return (
        <div className="home">
            <AdminHeader />
            <div className="main-content">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Home;