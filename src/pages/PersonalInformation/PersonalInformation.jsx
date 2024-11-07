import React, { useEffect } from 'react';
import "./personalInformation.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneStudent } from "../../redux/StudentSlice";

import avatarIcon from "../../assets/images/avatar-icon.png"; // Path to your avatar icon image

const PersonalInformation = () => {
    const dispatch = useDispatch();
    const { students } = useSelector((state) => state.StudentSlice);

    useEffect(() => {
        const userID = sessionStorage.getItem('userID');
        if (userID) {
            dispatch(getOneStudent({ id: userID }));  // Pass userID as parameter
        }
    }, [dispatch]);

    return (
        <div className="backgroundPage">
            <div style={{ padding: "20px 60px" }}>
                <div className="blur">
                    <div className="personal_head">
                        <Link style={{ textDecoration: "none", color: "#8D8484" }} to="/about">
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
                                        src={students?.avatar || avatarIcon}
                                        alt="Photo"
                                    />

                            </div>
                            <div className="personal_infos_InfoCard_shows">
                                <div className="personal_infos_InfoCard_shows_self">
                                    <div className="personal_infos_InfoCard_shows_self_NTitle">FIO</div>
                                    <div className="personal_infos_InfoCard_shows_self_NTitle">Tug'ilgan kun</div>
                                    <div className="personal_infos_InfoCard_shows_self_NTitle">Jinsi</div>
                                    <div className="personal_infos_InfoCard_shows_self_NTitle">Manzil</div>
                                    <div className="personal_infos_InfoCard_shows_self_NTitle">Guruhi</div>
                                </div>
                                <div className="personal_infos_InfoCard_shows_self">
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">
                                                {students.fullname}
                                            </div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">
                                                {students.birthday}
                                            </div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">
                                                {students.gender}
                                            </div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">
                                                {students.adress}
                                            </div>
                                            <div className="personal_infos_InfoCard_shows_self_NTitle">
                                                {students?.group?.name}
                                            </div>


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
