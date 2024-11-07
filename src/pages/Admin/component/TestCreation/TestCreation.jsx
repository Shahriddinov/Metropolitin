import React, {useEffect, useState} from 'react';
import {FaTrashAlt, FaEdit} from 'react-icons/fa';
import SettingTest from './SettingTest/SettingTest';
import './testCreation.scss';
import Home from '../Home/Home';
import ModalTest from './ModalTest/ModalTest';
import {useDispatch, useSelector} from 'react-redux';
import {getAllScience} from '../../../../redux/ScienceSlice';
import {getCreateQuiz, quizCreate} from '../../../../redux/QuizCreateSlice';
import {
    getQuestionQuiz,
    quizQuestionCreate,
    quizQuestionDelete,
    quizQuestionUpdate
} from '../../../../redux/QuizQuestionSlice';
import {addGroups, getAllGroups} from "../../../../redux/GroupSlice";
import {useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from "antd";

const TestCreation = () => {
    const dispatch = useDispatch();
    const {scienceList} = useSelector((state) => state.ScienceSlice);
    const {quizItems} = useSelector((state) => state.quizCreateSlice);
    const {allGroups = []} = useSelector((state) => state.GroupSlice || {});
    const [size, setSize] = useState('large'); // default is 'middle'
    const [editMode, setEditMode] = useState(false);
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [showResults, setShowResults] = useState(false); // State to show results

    const [modalTestFormData, setModalTestFormData] = useState({
        title: "",
        duration: "",
        group: "",
        start: "",
        total_question_count: "",
        required_score_to_pass: "",
        chances: 1,
        course: '',
        deadline: ''
    });


    const [settingTestFormData, setSettingTestFormData] = useState({
        title: "",
        quiz: sessionStorage.getItem('quizId'),  // Use the initialized quizId from state
        answers: Array.from({length: 4}, () => ({title: '', is_correct: false, description: "string", structure: 1})),
        structure: 3
    });
    const [showModal, setShowModal] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [isMultipleChoice, setIsMultipleChoice] = useState(true);
    const handleShowResults = () => {
        setShowResults(true); // Set to true to show results and hide questions
    };
    useEffect(() => {
        dispatch(getQuestionQuiz());
        dispatch(getCreateQuiz());
        dispatch(getAllScience());
        dispatch(getAllGroups());
    }, [dispatch]);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setModalTestFormData({
            title: "",
            duration: "",
            group: "",
            start: "",
            total_question_count: "",
            required_score_to_pass: "",
            chances: 1,
            course: '',
            deadline: ''
        });
        setModalTestFormData({
            title: "",
            quiz: sessionStorage.getItem('quizId'),  // Use the initialized quizId from state
            answers: Array.from({length: 4}, () => ({
                title: '',
                is_correct: false,
                description: "string",
                structure: 1
            })),
            structure: 3
        });
    };
    const handleOpenSettingsModal = () => setShowSettingsModal(true);
    const handleCloseSettingsModal = () => setShowSettingsModal(false);
    const handleDelete = (questionId) => {
        dispatch(quizQuestionDelete(questionId)).then((action) => {
            if (action.meta.requestStatus === 'fulfilled') {
                toast.success("Question successfully deleted!");
            } else if (action.meta.requestStatus === 'rejected') {
                toast.error("Error occurred while deleting the question.");
            }
            dispatch(getQuestionQuiz());
            dispatch(getCreateQuiz());
        })
    }
    const handleEdit = (question) => {
        setEditMode(true);
        setSelectedQuestionId(question.id)
        setSettingTestFormData({
            title: question.title,
            quiz: question.quizId,
            answers: question.answers.map((answer) => ({
                title: answer.title,
                is_correct: answer.is_correct,
                description: answer.description || "string",
                structure: answer.structure || 1
            })),
            structure: question.structure || 3
        });
        handleOpenSettingsModal()
    }
    // ModalTest form change handler
    const handleModalTestChange = (e) => {
        const {name, value} = e.target;
        setModalTestFormData({
            ...modalTestFormData,
            [name]: value
        });
    };

    // SettingTest form change handler
    const handleSettingTestChange = (e, index = null) => {
        const {name, value} = e.target;

        if (index !== null) {
            // Create a new array of answers, not mutating the original state
            const updatedAnswers = settingTestFormData.answers.map((answer, i) =>
                i === index ? {...answer, title: value} : answer
            );

            // Ensure the entire formData object is updated immutably
            setSettingTestFormData({
                ...settingTestFormData,
                answers: updatedAnswers
            });
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
                i === index ? {...answer, is_correct: !answer.is_correct} : answer
            );
        } else {
            updatedAnswers = settingTestFormData.answers.map((answer, i) =>
                i === index ? {...answer, is_correct: true} : {...answer, is_correct: false}
            );
        }
        setSettingTestFormData({...settingTestFormData, answers: updatedAnswers});
    };

    // quiz yaratish muvaffaqiyatli bo'lganda, quizId'ni sessionStorage'ga saqlang
    const handleSubmitModalTest = async (e) => {
        e.preventDefault();
        try {
            const result = await dispatch(quizCreate(modalTestFormData)).unwrap();
            if (result?.status === 201) {


                // formani tozalash
                setModalTestFormData({
                    title: "",
                    duration: "",
                    group: "",
                    start: "",
                    total_question_count: "",
                    required_score_to_pass: "",
                    chances: 1,
                    course: '',
                    deadline: ''
                });
            }
            handleCloseModal();

        } catch (error) {
            console.error(error);
            toast.error('Testni yaratishda xatolik!');
        }
    };
    const handleSubmitSettingTest = async (e) => {
        e.preventDefault();

        if (editMode) {
            await dispatch(quizQuestionUpdate({id: selectedQuestionId, payload: settingTestFormData})).unwrap();
            toast.success("Question successfully updated!");
        } else {
            await dispatch(quizQuestionCreate(settingTestFormData)).unwrap();
            toast.success("Question successfully added!");
        }
        dispatch(getQuestionQuiz());
        dispatch(getCreateQuiz());

        // Reset edit mode and form data
        setSettingTestFormData({
            title: "",
            quiz: sessionStorage.getItem('quizId'),
            answers: Array.from({length: 4}, () => ({
                title: '',
                is_correct: false,
                description: "string",
                structure: 1
            })),
            structure: 3
        });
        // Close the settings modal
        handleCloseSettingsModal();
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
                <div
                    style={{display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", padding:"20px"}}>
                    <Button className="add-question-btn" onClick={handleShowModal} type="green" size={size}>
                        + Test qo'shish
                    </Button>
                    <Button className="add-question-btn" onClick={handleOpenSettingsModal} type="green" size={size}>
                        + Savol yaratish
                    </Button>
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

                {!showResults && (
                    <div className="test-creation_list">
                    {quizItems?.results?.map((quiz, index) => (
                        <div key={index}>
                            {quiz.questions?.map((question, questionIndex) => (
                                <div key={questionIndex} className="question-item">
                                    <div className="question-header">
                                        <span className="question-number">{questionIndex + 1}.</span>
                                        <span className="question-text">{question.title}</span>
                                        <div className="question-actions">
                                            <span className="question-action"><FaEdit
                                                onClick={() => handleEdit(question)}/></span>
                                            <span className="question-action"
                                                  onClick={() => handleDelete(question.identifier || question.id)}><FaTrashAlt/></span>
                                        </div>
                                    </div>
                                    <ul className="options-list">
                                        <li>
                                            <ul className="answers-list">
                                                {question.answers?.map((answer, answerIndex) => (

                                                    <li key={answerIndex} className="answer-item">

                                                        {question.technique !== undefined ? (
                                                            question.technique === 1 ? (
                                                                <input type="checkbox" readOnly
                                                                       checked={answer.is_correct}/>
                                                            ) : question.technique === 0 ? (
                                                                <input type="radio" readOnly
                                                                       checked={answer.is_correct}/>
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
                )}
                <button className="test-creation-results" onClick={handleShowResults}>
                    Testni yakunlash
                </button>
                {showResults && (
                    <table>
                        <thead>
                        <tr>
                            <th>Test nomi</th>
                            <th>Boshlanish sanasi</th>
                            <th>Tugash sanasi</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Yakuniy test</td>
                            <td>02.05.2024</td>
                            <td>02.05.2024</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                )}
            </div>
            <ToastContainer/>
        </Home>
    );
};

export default TestCreation;
