import React, { useEffect } from 'react';
import "./teacherInformation.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getOneTeachers} from "../../../../redux/TeacherSlice";
import avatarIcon from "../../../../assets/images/avatar-icon.png";
const TeacherInformation = () => {
    const dispatch = useDispatch();
    const { singleTeacher } = useSelector((state) => state.TeacherSlice);

    useEffect(() => {
        const userID = sessionStorage.getItem('userID');

        if (userID) {
            dispatch(getOneTeachers({id: userID }));
        }
    },[ dispatch]);




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

                                    <img
                                        width="100%"
                                        height="100%"
                                        src={singleTeacher?.avatar || avatarIcon}
                                        alt="Photo"
                                    />

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
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{singleTeacher?.fullname}</div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{singleTeacher?.birthday}</div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{singleTeacher?.gender}</div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{singleTeacher?.adress}</div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">{singleTeacher?.expertise}</div>
                                            {/*<div className="personal_infos_InfoCard_shows_self_NTitle">{getTeacherName(loggedInStudent.teacher)}</div>*/}
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
