// src/components/Modal.js
import React from 'react';
import './teacherModal.scss';

const TeacherModal = ({ show, handleClose, handleSubmit, handleChange, formData }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>O'qituvchi</h2>
                    <span className="close" onClick={handleClose}>&times;</span>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>F I O</label>
                                <input type="text" name="fio" value={formData.fio} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Mutaxassislik</label>
                                <input type="text" name="mutaxassislik" value={formData.mutaxassislik} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>ID/Passport(seriya raqam)</label>
                                <input type="text" name="idPassport" value={formData.idPassport} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Ta'lim turi</label>
                                <input type="text" name="talimTuri" value={formData.talimTuri} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Ish joyi</label>
                                <input type="text" name="ishJoyi" value={formData.ishJoyi} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>JSHSHIR (PINFL)</label>
                                <input type="text" name="jshshir" value={formData.jshshir} onChange={handleChange} required />
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

export default TeacherModal;
