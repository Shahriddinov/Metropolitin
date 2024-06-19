import React from 'react';

const ModalScience = ({ show, handleClose, handleSubmit, handleChange, formData }) => {
    if (!show) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Fan</h2>
                    <span className="close" onClick={handleClose}>&times;</span>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Fan nomi</label>
                                <input type="text" name="science" value={formData.science} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Dars sanasi</label>
                                <input type="text" name="lessonTime" value={formData.lessonTime} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>O'quv yili</label>
                                <input type="text" name="studyYear" value={formData.studyYear} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Xodim</label>
                                <input type="text" name="employee" value={formData.employee} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Mashg'ulot</label>
                                <input type="text" name="training" value={formData.training} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Guruhi</label>
                                <input type="text" name="group" value={formData.group} onChange={handleChange} required />
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

export default ModalScience;