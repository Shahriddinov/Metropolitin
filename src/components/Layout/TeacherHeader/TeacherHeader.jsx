import React, {useEffect, useState} from "react";
import Logo from "../../../assets/images/logo.png"
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import {IoClose, IoMenu} from "react-icons/io5";

const TeacherHeader = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const isMobile = useMediaQuery({maxWidth: "1150px"});
    const toggleChecked = () => {
        setOpenMenu(!openMenu);
    }
    const closeMobileMenu = () => {
        if (isMobile) {
            setOpenMenu(false);
        }
    };
    return (
        <div className="header">
            <div className="container">
                <div className="flexs">
                    <Link to="/teacher/about">
                        <img className="header_logo" width="100%" height="100%" src={Logo} alt="logo"/>
                    </Link>
                    <ul className={` ${openMenu ? 'header_menu' : 'header_navbar'}`}>
                        <Link to="/teacher/schedule">
                            <li className="header_navbar_nav">DARS JADVALI</li>
                        </Link>
                        {/*<Link to="/teacher/homework">*/}
                        {/*    <li className="header_navbar_nav">VAZIFALAR</li>*/}
                        {/*</Link>*/}
                        <Link to="/teacher/personal">
                            <li className="header_navbar_nav">SHAXSIY MA'LUMOT</li>
                        </Link>
                        <Link to="/teacher/science">
                            <li className="header_navbar_nav">FANLAR</li>
                        </Link>
                        {/*<Link to="/library">*/}
                        {/*    <li className="header_navbar_nav">KUTUBXONA</li>*/}
                        {/*</Link>*/}
                        <Link to="/test">
                            <li className="header_navbar_nav">YANKUNIY TEST</li>
                        </Link>
                    </ul>
                    {isMobile && (
                        <div className="header_burger" id="nav-toggle" onClick={toggleChecked}>
                            <IoMenu/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeacherHeader;
