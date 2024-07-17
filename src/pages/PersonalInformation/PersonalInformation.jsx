// src/components/PersonalInformation/PersonalInformation.js

import React, { useEffect } from 'react';
import "./personalInformation.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../../redux/getStudentSlice/getStudentSlice";
import { baseUrlImg } from "../../services/api/utilis";
import avatarIcon from "../../assets/images/avatar-icon.png"; // Path to your avatar icon image

const PersonalInformation = () => {
    const dispatch = useDispatch();
    const { students, limit, offset } = useSelector((state) => state.AllStudent);

    useEffect(() => {
        const userID = localStorage.getItem('userID');
        if (userID) {
            dispatch(getStudent({ limit, offset }));
        }
    }, [limit, offset, dispatch]);

    const loggedInStudentId = localStorage.getItem('userID');
    const loggedInStudent = students.find(student => student.id === parseInt(loggedInStudentId));

    return (
        <div className="backgroundPage">
            <div style={{ padding: "20px 60px" }}>
                <div className="blur">
                    <div className="personal_head">
                        <Link style={{ textDecoration: "none", color: "#8D8484" }} to="/about">
                            <div className="personal_head_homes">Bosh saxifaga qaytish</div>
                        </Link>
                    </div>
                    <div className="personal_infos">
                        <div className="">Shaxsiy Ma'lumotlar</div>
                        <div className="personal_infos_InfoCard">
                            <div className="personal_infos_InfoCard_Photos">
                                {loggedInStudent && (
                                    <img
                                        width="100%"
                                        height="100%"
                                        src={loggedInStudent.avatar || avatarIcon}
                                        alt="Photo"
                                    />
                                )}
                            </div>
                            <div className="personal_infos_InfoCard_shows">
                                <div className="personal_infos_InfoCard_shows_self">
                                    <div className="personal_infos_InfoCard_shows_self_NTitle">FIO</div>
                                    <div className="personal_infos_InfoCard_shows_self_NTitle">Tug'ilgan kun</div>
                                    <div className="personal_infos_InfoCard_shows_self_NTitle">Jinsi</div>
                                    <div className="personal_infos_InfoCard_shows_self_NTitle">Manzil</div>
                                    <div className="personal_infos_InfoCard_shows_self_NTitle">Guruhi</div>
                                    {/*<div className="personal_infos_InfoCard_shows_self_NTitle">O'qituvchi</div>*/}
                                </div>
                                <div className="personal_infos_InfoCard_shows_self">
                                    {loggedInStudent && (
                                        <>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{loggedInStudent.fullname}</div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{loggedInStudent.birthday}</div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{loggedInStudent.gender}</div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{loggedInStudent.adress}</div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{loggedInStudent.group.name}</div>
                                            {/*<div className="personal_infos_InfoCard_shows_self_NTitle">{getTeacherName(loggedInStudent.teacher)}</div>*/}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInformation;
