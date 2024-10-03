import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./testSolution.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCreateQuiz } from "../../redux/QuizCreateSlice";
import {getAllGroups, getGroup} from "../../redux/GroupSlice";

const TestSolution = () => {
    const dispatch = useDispatch();
    const groupID = localStorage.getItem('groupID');
    const { allGroups = [], } = useSelector((state) => state.GroupSlice  || {});

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { quizItems } = useSelector((state) => state.quizCreateSlice);
    useEffect(() => {
        dispatch(getCreateQuiz());
        dispatch(getAllGroups());
    }, [dispatch]);

    // Function to toggle modal visibility
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Sana formatlovchi funksiya
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Oylarda 0 qo'shiladi
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} soat ${hours}:${minutes} `;
    };

    // Quiz items va results mavjudligini tekshirish, keyin group.id bo'yicha filter qilish
    const filteredQuizzes = quizItems?.results?.filter(quiz => quiz?.group === parseInt(groupID));
    const getGroupName = (groupId) => {
        const group = allGroups.find(g => g.id === groupId);
        return group ? group.name : 'Unknown Group';
    };
    return (
        <div className="backgroundPage">
            <div style={{ padding: "20px 60px" }}>
                <div className="blur">
                    <div className="result">
                        <div className="result_head">
                            <div className="result_head_homes">Yakuniy Test</div>
                            <Link style={{ textDecoration: "none", color: "#8D8484" }} to="/teacher/science">
                                <div className="result_head_homes">Bosh saxifaga qaytish</div>
                            </Link>
                        </div>
                        <table border="1" className="tabless">
                            <thead>
                            <tr>
                                <th className="tabless_th">Test Nomi</th>
                                <th className="tabless_th">Guruh</th>
                                <th className="tabless_th">Boshlanish sanasi</th>
                                <th className="tabless_th">Tugash sanasi</th>
                                <th className="tabless_th">To'plangan bal</th>
                                <th className="tabless_th"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredQuizzes?.length > 0 ? (
                                filteredQuizzes.map((quiz, index) => (
                                    <tr key={index}>
                                        <td className="tabless_items">{quiz.title}</td>
                                        <td className="tabless_items">{getGroupName(quiz.group)}</td>
                                        <td className="tabless_items">{formatDate(quiz.start)}</td>
                                        <td className="tabless_items">{formatDate(quiz.deadline)}</td>
                                        <td className="tabless_items">_/{quiz.duration}</td>
                                        <td className="tabless_items">
                                            <BsThreeDotsVertical onClick={toggleModal} />

                                            {isModalOpen && (
                                                <div className="custom-modal">
                                                    <div className="modal-content">
                                                        <Link
                                                            to={`/testSolution/final?group=${groupID}&quiz=${quiz.id}`}
                                                            className="modal-content_dones"
                                                        >
                                                            Testni boshlash
                                                        </Link>
                                                    </div>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="tabless_items">Ma'lumotlar topilmadi</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestSolution;
