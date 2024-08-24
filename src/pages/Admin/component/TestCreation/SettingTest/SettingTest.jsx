import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './settingTest.scss';
import {useDispatch} from "react-redux";
import {quizQuestionCreate} from "../../../../../redux/QuizQuestionSlice";

const SettingTest = ({ question, onSave, onClose }) => {
    const [isMultipleChoice, setIsMultipleChoice] = useState(true);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        title: "",
        technique: '0',  // Initialize with default value (0 for multiple-choice)
        is_active: true,
        quiz: localStorage.getItem('quizId'),
        structure: 2
    });
console.log(localStorage.getItem('quizId'))
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(quizQuestionCreate(formData)).then(() => {
            // dispatch(getSchedule({limit, offset}));
        });
        setFormData({
            title: "",
            technique: '0',
            is_active: true,
            quiz: localStorage.getItem('quizId'),
            structure: 2
        });
    };

    const handleQuestionTypeChange = (event) => {
        const isMultiple = event.target.id === 'multiple-choice';
        setIsMultipleChoice(isMultiple);
        setFormData({
            ...formData,
            technique: isMultiple ? '0' : '1'
        });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Savol qo'shish</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <div className="modal-body">
                    <div className="question-type">
                        <input
                            type="checkbox"
                            id="multiple-choice"
                            name="question-type"
                            checked={isMultipleChoice}
                            onChange={handleQuestionTypeChange}
                        />
                        <label htmlFor="multiple-choice">Bir qancha variant tanlash</label>
                        <input
                            type="radio"
                            id="single-choice"
                            name="question-type"
                            checked={!isMultipleChoice}
                            onChange={handleQuestionTypeChange}
                        />
                        <label htmlFor="single-choice">Variantlardan bittasi tanlash</label>
                    </div>
                    <div className="question-input">
                        <input
                            type="text"
                            name="title"
                            id="question"
                            placeholder="Savolni kiriting"
                            onChange={handleChange}
                            value={formData.title}
                        />
                    </div>
                    <div className="options">
                        {[...Array(4)].map((_, index) => (
                            <div className="option" key={index}>
                                <input
                                    type={isMultipleChoice ? "checkbox" : "radio"}
                                    name="options"
                                    id={`option-${index}`}
                                />
                                <input type="text" placeholder="Variantni kiriting" />
                            </div>
                        ))}
                    </div>
                    <div className="controls">
                        <div className="mandatory">
                            <input type="checkbox" id="mandatory" />
                            <label htmlFor="mandatory">Majburiy savol</label>
                        </div>
                        <div className="correct-answer">
                            <input type="checkbox" id="correct-answer" />
                            <label htmlFor="correct-answer">To'g'ri javob</label>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={handleSubmit}>Saqlash</button>
                </div>
            </div>
        </div>
    );
};

export default SettingTest;
