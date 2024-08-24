import React, {useEffect, useState} from 'react';
import {FaTrashAlt, FaEdit} from 'react-icons/fa';
import SettingTest from './SettingTest/SettingTest';
import './testCreation.scss';
import Home from "../Home/Home";
import ModalTest from './ModalTest/ModalTest';
import {useDispatch, useSelector} from "react-redux";
import {getAllScience, getScience} from "../../../../redux/ScienceSlice";

import {quizCreate} from "../../../../redux/QuizCreateSlice";

const TestCreation = () => {
    const dispatch = useDispatch();
    const {scienceList,} = useSelector((state) => state.ScienceSlice); // Adjust state access
    const [showModal, setShowModal] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false); // State for settings modal


    const [formData, setFormData] = useState({
        total_question_count: "",
        title: "",
        duration: "",
        required_score_to_pass: "",
        chances: 1,
        course: '',
        deadline: ''
    });
    useEffect(() => {

        dispatch(getAllScience());
    }, [dispatch]);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleEditQuestion = (index) => {
        setShowForm(true);
    };

    const handleDeleteQuestion = (index) => {
        const updatedQuestions = questions.filter((_, qIndex) => qIndex !== index);
        setQuestions(updatedQuestions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(quizCreate(formData)).then(() => {
            // dispatch(getSchedule({limit, offset}));
        });
        setFormData({
            total_question_count: "",
            title: "",
            duration: "",
            required_score_to_pass: "",
            chances: 1,
            course: '',
            deadline: ''

        });
        handleCloseModal();
    };

    const handleOpenSettingsModal = () => {
        setShowSettingsModal(true);
    };

    const handleCloseSettingsModal = () => {
        setShowSettingsModal(false);
    };

    return (
        <Home>
            <div className="test-creation">
                <div
                    style={{display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer"}}>
                    <button className="add-question-btn" onClick={handleShowModal}>
                        + Test qo'shish
                    </button>
                    <button className="add-question-btn" onClick={handleOpenSettingsModal}>
                        + Savol yaratish
                    </button>


                </div>
                {questions.map((question, index) => (
                    <div key={index} className="question-item">
                        <div className="question-header">
                            <span className="question-number">{index + 1}.</span>
                            <span className="question-text">{question.questionText}</span>
                            <div className="question-actions">
                                <span className="question-action"
                                      onClick={() => handleEditQuestion(index)}><FaEdit/></span>
                                <span className="question-action"
                                      onClick={() => handleDeleteQuestion(index)}><FaTrashAlt/></span>
                            </div>
                        </div>
                        <ul className="options-list">
                            {question.options.map((option, optionIndex) => (
                                <li key={optionIndex} className="option-item">
                                    <input
                                        type="radio"
                                        id={`question-${index}-option-${optionIndex}`}
                                        name={`question-${index}`}
                                        checked={optionIndex === question.correctOption}
                                        readOnly
                                    />
                                    <label htmlFor={`question-${index}-option-${optionIndex}`}>{option}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {showModal && (
                    <ModalTest
                        show={showModal}
                        handleClose={handleCloseModal}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        scienceData={scienceList || []}
                        formData={formData}
                    />
                )}
                {showSettingsModal && (
                    <SettingTest onClose={handleCloseSettingsModal}/>
                )}
            </div>
        </Home>
    );
};

export default TestCreation;
