import React, { useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import SettingTest from './SettingTest/SettingTest';
import './testCreation.scss';
import Home from "../Home/Home";
import Settings from "../../../../assets/images/settings.png";
import ModalTest from './ModalTest/ModalTest'; // Import the ModalTest component

const TestCreation = () => {
    const [questions, setQuestions] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false); // State for settings modal
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const handleAddQuestion = () => {
        setCurrentQuestion(null);
        setShowForm(true);
    };

    const handleEditQuestion = (index) => {
        setCurrentQuestion(index);
        setShowForm(true);
    };

    const handleDeleteQuestion = (index) => {
        const updatedQuestions = questions.filter((_, qIndex) => qIndex !== index);
        setQuestions(updatedQuestions);
    };

    const handleSaveQuestion = (question) => {
        if (currentQuestion !== null) {
            const updatedQuestions = [...questions];
            updatedQuestions[currentQuestion] = question;
            setQuestions(updatedQuestions);
        } else {
            setQuestions([...questions, question]);
        }
        setShowForm(false);
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                    <button className="add-question-btn" onClick={handleAddQuestion}>
                        + Test yaratish
                    </button>
                    <img
                        width="24px"
                        height="24px"
                        src={Settings}
                        alt="Settings"
                        onClick={handleOpenSettingsModal}
                    />
                </div>
                {questions.map((question, index) => (
                    <div key={index} className="question-item">
                        <div className="question-header">
                            <span className="question-number">{index + 1}.</span>
                            <span className="question-text">{question.questionText}</span>
                            <div className="question-actions">
                                <span className="question-action" onClick={() => handleEditQuestion(index)}><FaEdit /></span>
                                <span className="question-action" onClick={() => handleDeleteQuestion(index)}><FaTrashAlt /></span>
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
                {showForm && (
                    <ModalTest
                        question={currentQuestion !== null ? questions[currentQuestion] : null}
                        onSave={handleSaveQuestion}
                        onClose={() => setShowForm(false)}
                    />
                )}
                {showSettingsModal && (
                    <SettingTest onClose={handleCloseSettingsModal} />
                )}
            </div>
        </Home>
    );
};

export default TestCreation;
