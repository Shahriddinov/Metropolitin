import React from 'react';
import './settingTest.scss';

const SettingTest = ({
                         formData,
                         handleChange,
                         handleCorrectAnswer,
                         handleSubmit,
                         handleQuestionTypeChange,
                         isMultipleChoice,
                         onClose
                     }) => {

    return (
        <div className="modal">
            <form className="modal-content" onSubmit={handleSubmit}>
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
                        {formData.answers.map((answer, index) => (
                            <div className="option" key={index}>
                                <input
                                    type="text"
                                    placeholder={`Variant ${index + 1}`}
                                    value={answer.title}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                <input
                                    type={isMultipleChoice ? 'checkbox' : 'radio'}
                                    checked={answer.is_correct}
                                    onChange={() => handleCorrectAnswer(index)}
                                />
                                <label>To'g'ri javob</label>
                            </div>
                        ))}
                    </div>
                </div>
                    <button type="submit" className="save-button">Saqlash</button>
            </form>
        </div>
    );
};

export default SettingTest;
