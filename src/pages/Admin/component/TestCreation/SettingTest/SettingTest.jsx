import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './settingTest.scss';

const SettingTest = ({ question, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        questionText: question ? question.questionText : '',
        options: question ? question.options : ['', '', '', ''],
        correctOption: question ? question.correctOption : 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOptionChange = (index, value) => {
        const updatedOptions = formData.options.map((option, i) =>
            i === index ? value : option
        );
        setFormData({ ...formData, options: updatedOptions });
    };

    const handleCorrectOptionChange = (index) => {
        setFormData({ ...formData, correctOption: index });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Savol</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                               <div className="points">
                                   <label>Bal :</label>
                                   <input
                                       type="number"
                                       name="points"
                                       value={formData.points}
                                       onChange={handleChange}
                                       required
                                   />
                           </div>
                            <input
                                type="text"
                                name="questionText"
                                placeholder="Savolni kiriting"
                                value={formData.questionText}
                                onChange={handleChange}
                                required
                            />

                        </div>
                        {formData.options.map((option, index) => (
                            <div className="form-group option-group" key={index}>
                                <input
                                    type="text"
                                    placeholder="Variantni kiriting"
                                    value={option}
                                    onChange={(e) => handleOptionChange(index, e.target.value)}
                                    required
                                />
                                <input
                                    type="radio"
                                    name="correctOption"
                                    checked={formData.correctOption === index}
                                    onChange={() => handleCorrectOptionChange(index)}
                                    required
                                />
                                <FaTrashAlt className="delete-icon" onClick={() => handleOptionChange(index, '')} />
                            </div>
                        ))}
                        <div className="form-footer">
                            <div className="mandatory">
                                <label>Majburiy savol</label>
                                <input type="checkbox" name="mandatory" checked={formData.mandatory} onChange={handleChange} />
                            </div>

                            <button type="submit" className="save-button">
                                Saqlash
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SettingTest;
