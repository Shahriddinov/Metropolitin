import React from 'react';

const ModalGroup = ({ show, handleClose, handleSubmit, handleChange, formData }) => {
    if (!show) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>+ Guruh yaratish</h2>
                    <span className="close" onClick={handleClose}>&times;</span>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Guruh nomi</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Malaka oshirish uchun soat</label>
                                <input type="text" name="training_hour" value={formData.training_hour} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>O'quv yili</label>
                                <input type="date" name="study_period" placeholder="YYYY-MM-DD" value={formData.study_period} onChange={handleChange} required />
                            </div>

                        </div>

                        <div className="form-group form-submit">
                            <button className="MButton" type="submit">Saqlash</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalGroup;