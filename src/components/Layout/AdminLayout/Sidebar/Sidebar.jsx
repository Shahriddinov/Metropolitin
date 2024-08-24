// src/components/Sidebar.js
import React from 'react';
import './Sidebar.scss';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar_Sul">
                <Link to="/admin/addSchedule" style={{textDecoration: "none", color: "white"}}>
                    <li className="sidebar_Sul_Sli">Dars jadvali yaratish</li>
                </Link>
                <Link to="/admin/addLibrary" style={{textDecoration: "none", color: "white"}}>
                    <li className="sidebar_Sul_Sli">Kutubxona</li>
                </Link>
                <Link to="/admin/addStudent" style={{textDecoration: "none", color: "white"}}>
                    <li className="sidebar_Sul_Sli">Talabalar</li>
                </Link>
                <Link to="/admin/addDocuments" style={{textDecoration: "none", color: "white"}}>
                    <li className="sidebar_Sul_Sli">Normativ hujjatlar</li>
                </Link>
                <Link to="/admin/addScience" style={{textDecoration: "none", color: "white"}}>
                    <li className="sidebar_Sul_Sli">Fan yaratish</li>
                </Link>
                <Link to="/admin/addGroup" style={{textDecoration: "none", color: "white"}}>
                    <li className="sidebar_Sul_Sli">Guruh yaratish</li>
                </Link>
                <Link to="/admin/addTest" style={{textDecoration: "none", color: "white"}}>
                    <li className="sidebar_Sul_Sli">Test yaratish</li>
                </Link>
                <Link to="/admin/addTeacher" style={{textDecoration: "none", color: "white"}}>
                    <li className="sidebar_Sul_Sli">O'qituvchi qo'shish</li>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;
