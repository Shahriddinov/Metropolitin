import React from 'react';
import './modalTest.scss';

const ModalTest = ({ show, handleClose, handleSubmit, handleChange, formData, scienceData }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={handleClose}>&times;</button>
                <form className="settings-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Test nomi:</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            placeholder="Test nomi....."
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Fanlar:</label>
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                style={{ padding: "7px", width: "100%" }}
                                required
                            >
                                <option value="" disabled>Tanlang</option>
                                {scienceData && scienceData.map((science) => (
                                    <option key={science.id} value={science.id}>{science.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Test topshirish soni:</label>
                        <input
                            type="number"
                            name="total_question_count"
                            placeholder="00"
                            value={formData.total_question_count}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Test davomiyligi (daqiqalarda):</label>
                        <input
                            type="number"
                            name="duration"
                            placeholder="0"
                            value={formData.duration}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Tugash sanasi:</label>
                        <input
                            type="datetime-local"
                            name="deadline"
                            placeholder="2024-08-08T14:30"
                            value={formData.deadline}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>O'tish bal:</label>
                        <input
                            type="text"
                            name="required_score_to_pass"
                            placeholder="60%"
                            value={formData.required_score_to_pass}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="save-button">Saqlash</button>
                </form>
            </div>
        </div>
    );
};

export default ModalTest;
