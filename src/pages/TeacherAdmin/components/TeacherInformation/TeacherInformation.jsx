import React, { useEffect } from 'react';
import "./teacherInformation.scss";
import { Link } from "react-router-dom";
import Photo from "../../../../assets/images/Photos.png";
import { useDispatch, useSelector } from "react-redux";
import {getTeachers} from "../../../../redux/TeacherSlice";
import avatarIcon from "../../../../assets/images/avatar-icon.png";
const TeacherInformation = () => {
    const dispatch = useDispatch();
    const { teachers, limit, offset } = useSelector((state) => state.TeacherSlice);

    useEffect(() => {
        const userID = localStorage.getItem('userID');

        if (userID) {
            dispatch(getTeachers({ limit, offset }));
        }
    }, [limit, offset, dispatch]);

    const loggedInStudentId = localStorage.getItem('userID');
    const loggedInStudent = teachers.find(teacher => teacher.id === parseInt(loggedInStudentId));



    return (
        <div className="backgroundPage">
            <div style={{ padding: "20px 60px" }}>
                <div className="blur">
                    <div className="personal_head">
                        <Link style={{ textDecoration: "none", color: "#8D8484" }} to="/teacher/about">
                            <div className="personal_head_homes">Bosh sahifaga qaytish</div>
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
                                    <div className="personal_infos_InfoCard_shows_self_NTitle">Mutaxasislik</div>
                                    {/*<div className="personal_infos_InfoCard_shows_self_NTitle">O'qituvchi</div>*/}
                                </div>
                                <div className="personal_infos_InfoCard_shows_self">
                                    {loggedInStudent && (
                                        <>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{loggedInStudent.fullname}</div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{loggedInStudent.birthday}</div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{loggedInStudent.gender}</div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{loggedInStudent.adress}</div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{loggedInStudent.expertise}</div>
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

export default TeacherInformation;
