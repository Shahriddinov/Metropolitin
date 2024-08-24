import React from 'react';

const ModalScience = ({ show, handleClose, handleSubmit, handleChange, formData, teacherData, groupsData}) => {

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
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Dars sanasi</label>
                                <input type="date" name="lesson_day" placeholder="YYYY-MM-DD" value={formData.lesson_day} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>O'quv yili</label>
                                <input type="date" name="study_period" placeholder="YYYY-MM-DD" value={formData.study_period} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Xodim</label>
                                <select name="teacher" value={formData.teacher} onChange={handleChange} style={{ padding: "7px" }} required>
                                    <option value="" disabled>Tanlang</option>
                                    {teacherData && teacherData.map((teacher) => (
                                        <option key={teacher.id} value={teacher.id}>{teacher.fullname}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Mashg'ulot</label>
                                <input type="text" name="training" value={formData.training} onChange={handleChange} required />
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Guruhi</label>
                                <select name="group" value={formData.group} onChange={handleChange} style={{ padding: "7px" }} required>
                                    <option value="" disabled>Tanlang</option>
                                    {groupsData && groupsData.map((groups) => (
                                        <option key={groups.id} value={groups?.id}>{groups?.name}</option>
                                    ))}
                                </select>
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