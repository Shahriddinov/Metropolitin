import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import SettingTest from './SettingTest/SettingTest';
import './testCreation.scss';
import Home from '../Home/Home';
import ModalTest from './ModalTest/ModalTest';
import { useDispatch, useSelector } from 'react-redux';
import { getAllScience } from '../../../../redux/ScienceSlice';
import { getCreateQuiz, quizCreate } from '../../../../redux/QuizCreateSlice';
import { getQuestionQuiz, quizQuestionCreate } from '../../../../redux/QuizQuestionSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getGroup} from "../../../../redux/GroupSlice";

const TestCreation = () => {
    const dispatch = useDispatch();
    const { scienceList } = useSelector((state) => state.ScienceSlice);
    const { quizItems } = useSelector((state) => state.quizCreateSlice);
    const { allGroups = [], } = useSelector((state) => state.GroupSlice  || {});


    const [modalTestFormData, setModalTestFormData] = useState({
        title: "",
        duration: "",
        group:"",
        start:"",
        total_question_count:"",
        required_score_to_pass: "",
        chances: 1,
        course: '',
        deadline: ''
    });


    const [settingTestFormData, setSettingTestFormData] = useState({
        title: "",
        duration: "",
        required_score_to_pass: "",
        chances: 1,
        course: '',
        deadline: '',
        quiz: localStorage.getItem('quizId'),
        answers: [
            { title: '', is_correct: false, description: "string", structure: 1 },
            { title: '', is_correct: false, description: "string", structure: 1 },
            { title: '', is_correct: false, description: "string", structure: 1 },
            { title: '', is_correct: false, description: "string", structure: 1 }
        ],
        structure: 3
    });

    const [showModal, setShowModal] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [isMultipleChoice, setIsMultipleChoice] = useState(true);

    useEffect(() => {
        dispatch(getCreateQuiz());
        dispatch(getQuestionQuiz());
        dispatch(getAllScience());
        dispatch(getGroup());
    }, [ dispatch]);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false)
        setModalTestFormData({
            title: "",
            duration: "",
            group:"",
            start:"",
            total_question_count:"",
            required_score_to_pass: "",
            chances: 1,
            course: '',
            deadline: ''
        });
        setModalTestFormData({
            title: "",
            duration: "",
            required_score_to_pass: "",
            chances: 1,
            course: '',
            deadline: '',
            quiz: localStorage.getItem('quizId'),
            answers: [
                { title: '', is_correct: false, description: "string", structure: 1 },
                { title: '', is_correct: false, description: "string", structure: 1 },
                { title: '', is_correct: false, description: "string", structure: 1 },
                { title: '', is_correct: false, description: "string", structure: 1 }
            ],
            structure: 3
        });
    };
    const handleOpenSettingsModal = () => setShowSettingsModal(true);
    const handleCloseSettingsModal = () => setShowSettingsModal(false);

    // ModalTest uchun handleChange
    const handleModalTestChange = (e) => {
        const { name, value } = e.target;
        setModalTestFormData({
            ...modalTestFormData,
            [name]: value
        });
    };

    // SettingTest uchun handleChange
    const handleSettingTestChange = (e, index = null) => {
        const { name, value } = e.target;
        if (index !== null) {
            const updatedAnswers = settingTestFormData.answers.map((answer, i) =>
                i === index ? { ...answer, title: value } : answer
            );
            setSettingTestFormData({ ...settingTestFormData, answers: updatedAnswers });
        } else {
            setSettingTestFormData({
                ...settingTestFormData,
                [name]: value
            });
        }
    };

    const handleCorrectAnswer = (index) => {
        let updatedAnswers;
        if (isMultipleChoice) {
            updatedAnswers = settingTestFormData.answers.map((answer, i) =>
                i === index ? { ...answer, is_correct: !answer.is_correct } : answer
            );
        } else {
            updatedAnswers = settingTestFormData.answers.map((answer, i) =>
                i === index ? { ...answer, is_correct: true } : { ...answer, is_correct: false }
            );
        }
        setSettingTestFormData({ ...settingTestFormData, answers: updatedAnswers });
    };

    const handleSubmitModalTest = async (e) => {
        e.preventDefault();
        try {
            const result = await dispatch(quizCreate(modalTestFormData)).unwrap();

            // Check the response structure to ensure success message is properly shown
            if (result?.status === 201 || result?.message === "Test successfully created") {
                setModalTestFormData({
                    title: "",
                    duration: "",
                    group:"",
                    start:"",
                    total_question_count:"",
                    required_score_to_pass: "",
                    chances: 1,
                    course: '',
                    deadline: ''
                });
            } else {
            }
            handleCloseModal();
        } catch (error) {
            console.error(error);
        }
    };
    const handleSubmitSettingTest = async (e) => {
        e.preventDefault();
        try {
            const result = await dispatch(quizQuestionCreate(settingTestFormData)).unwrap();
            if (result.status === 201) {

                setSettingTestFormData({
                    title: "",
                    duration: "",
                    required_score_to_pass: "",
                    chances: 1,
                    course: '',
                    deadline: '',
                    quiz: localStorage.getItem('quizId'),
                    answers: [
                        { title: '', is_correct: false, description: "string", structure: 1 },
                        { title: '', is_correct: false, description: "string", structure: 1 },
                        { title: '', is_correct: false, description: "string", structure: 1 },
                        { title: '', is_correct: false, description: "string", structure: 1 }
                    ],
                    structure: 3
                });

                dispatch(getQuestionQuiz({ limit: 10, offset: 0 }));
            } else {
            }
            handleCloseSettingsModal();
        } catch (error) {
            console.error(error);
        }
    };


    const handleQuestionTypeChange = (event) => {
        const isMultiple = event.target.id === 'multiple-choice';
        setIsMultipleChoice(isMultiple);
        setSettingTestFormData({
            ...settingTestFormData,
            technique: isMultiple ? '0' : '1'
        });
    };

    return (
        <Home>
            <div className="test-creation">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                    <button className="add-question-btn" onClick={handleShowModal}>
                        + Test qo'shish
                    </button>
                    <button className="add-question-btn" onClick={handleOpenSettingsModal}>
                        + Savol yaratish
                    </button>
                </div>

                {showModal && (
                    <ModalTest
                        show={showModal}
                        handleClose={handleCloseModal}
                        handleSubmit={handleSubmitModalTest}
                        handleChange={handleModalTestChange}
                        scienceData={scienceList || []}
                        allGroups={allGroups || []}
                        formData={modalTestFormData}
                    />
                )}

                {showSettingsModal && (
                    <SettingTest
                        formData={settingTestFormData}
                        handleChange={handleSettingTestChange}
                        handleCorrectAnswer={handleCorrectAnswer}
                        handleSubmit={handleSubmitSettingTest}
                        handleQuestionTypeChange={handleQuestionTypeChange}
                        isMultipleChoice={isMultipleChoice}
                        onClose={handleCloseSettingsModal}
                    />
                )}

                {/* Render test items */}
                <div className="test-creation_list">
                    {quizItems?.results?.map((quiz, index) => (
                        <div key={index} className="question-item">
                            {quiz.questions?.map((question, questionIndex) => (
                                <div key={questionIndex}>
                                    <div className="question-header">
                                        <span className="question-number">{index + 1}.</span>
                                        <span className="question-text">{question.title}</span>
                                        <div className="question-actions">
                                            <span className="question-action"><FaEdit /></span>
                                            <span className="question-action"><FaTrashAlt /></span>
                                        </div>
                                    </div>

                                    <ul className="options-list">
                                        <li>
                                            <ul className="answers-list">
                                                {question.answers?.map((answer, answerIndex) => (
                                                    <li key={answerIndex} className="answer-item">
                                                        {question.technique !== undefined ? (
                                                            question.technique === 1 ? (
                                                                <input type="checkbox" readOnly checked={answer.is_correct} />
                                                            ) : question.technique === 0 ? (
                                                                <input type="radio" readOnly checked={answer.is_correct} />
                                                            ) : null
                                                        ) : null}
                                                        <label>{answer.title}</label>
                                                    </li>
                                                ))}

                                            </ul>
                                        </li>
                                    </ul>

                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
        </Home>
    );
};

export default TestCreation;
