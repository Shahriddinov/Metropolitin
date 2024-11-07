import React, { useState } from 'react';
import "./home.scss";
import { IoDocumentTextOutline, IoLibraryOutline } from "react-icons/io5";
import Logo from "../../../../assets/images/logo.png"
import {Link, useLocation, useNavigate} from 'react-router-dom'; // React Router dan Link import qilish
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { PiStudent } from "react-icons/pi";
import { GrGroup, GrSchedule } from "react-icons/gr";
import { MdOutlineScience } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import {IoIosLogOut} from "react-icons/io";
import {logout} from "../../../../redux/AuthSlice/AuthSlice";
import {useDispatch} from "react-redux";

const { Header, Sider, Content } = Layout;

const Home = (props) => {
    const location = useLocation(); // Hozirgi joylashuvni olish uchun
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { children } = props;
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState(location.pathname); // Tanlangan yo'nalish uchun state

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/'); // Redirect to login page after logout
    };
    const handleMenuClick = (e) => {
        setSelectedKey(e.key); // Bosilganda tanlangan elementni yangilash
    };
    return (
        <Layout style={{ height: "100vh" }}> {/* Layout heightini to'liq ekran qilish */}
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: "100vh", position: 'fixed', left: 0 }}> {/* Sider fixed holatda */}
                <div className="demo-logo-vertical" style={{ margin: "10px", paddingLeft:"15" }} >
                    <img src={Logo} alt="logo"/>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]} // Tanlangan menyu elementini yangilash
                    onClick={handleMenuClick} // Har safar bosilganda yangilanish
                    items={[
                        {
                            key: '1',
                            icon: <GrSchedule />,
                            label: <Link to="/admin/addSchedule">Dars jadvali yaratish</Link>, // Link ulash
                        },
                        {
                            key: '2',
                            icon: <IoLibraryOutline />,
                            label: <Link to="/admin/addLibrary">Kutubxona</Link>,
                        },
                        {
                            key: '3',
                            icon: <PiStudent />,
                            label: <Link to="/admin/addStudent">Talabalar</Link>,
                        },
                        {
                            key: '4',
                            icon: <IoDocumentTextOutline />,
                            label: <Link to="/admin/addDocuments">Normativ hujjatlar</Link>,
                        },
                        {
                            key: '5',
                            icon: <MdOutlineScience />,
                            label: <Link to="/admin/addScience">Fan yaratish</Link>,
                        },
                        {
                            key: '6',
                            icon: <GrGroup />,
                            label: <Link to="/admin/addGroup">Guruh yaratish</Link>,
                        },
                        {
                            key: '7',
                            icon: <SiTestcafe />,
                            label: <Link to="/admin/addTest">Test yaratish</Link>,
                        },
                        {
                            key: '8',
                            icon: <GiTeacher />,
                            label: <Link to="/admin/addTeacher">O'qituvchi qo'shish</Link>,
                        },
                        {
                            key: '9',
                            icon: <IoIosLogOut/>,
                            label: <div onClick={handleLogout}>Chiqish</div>,
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: collapsed ? 80 : 200 }}> {/* Content Sider ga mos ravishda suriladi */}
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        position: 'fixed',
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '80px 16px 24px 16px',

                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        overflow: 'auto', // Scroll imkoniyati
                        height: 'calc(100vh - 100px)', // Header va boshqa elementlardan joy qolishi uchun balandlikni moslash
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
