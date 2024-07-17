import React from 'react';

const ModalSchedule = ({show, handleClose, handleSubmit, handleChange, formData, teacherData, groupsData, scienceData}) => {
    if (!show) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Guruh jadvali ma'lumotlari</h2>
                    <span className="close" onClick={handleClose}>&times;</span>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">

                            <div className="form-group">
                                <label>Dars sanasi:</label>
                                <input type="date" name="day" placeholder="YYYY-MM-DD"
                                       value={formData.day} onChange={handleChange}
                                       required/>
                            </div>
                            <div className="form-group">
                                <label>Fanlar:</label>
                                <select name="course" value={formData.course} onChange={handleChange} style={{ padding: "7px" }} required>
                                    <option value="" disabled>Tanlang</option>
                                    {scienceData && scienceData.map((science) => (
                                        <option key={science.id} value={science.id}>{science.name}</option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        <div className="form-row">

                            <div className="form-group">
                                <label>Xodim:</label>
                                <select name="teacher" value={formData.teacher} onChange={handleChange} style={{ padding: "7px" }} required>
                                    <option value="" disabled>Tanlang</option>
                                    {teacherData && teacherData.map((teacher) => (
                                        <option key={teacher.id} value={teacher.id}>{teacher.fullname}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Guruh:</label>
                                <select name="group" value={formData.group} onChange={handleChange} style={{ padding: "7px" }} required>
                                    <option value="" disabled>Tanlang</option>
                                    {groupsData && groupsData.map((groups) => (
                                        <option key={groups.id} value={groups?.id}>{groups?.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-row">

                            <div className="form-group">
                                <label>Juftlik boshlanish:</label>
                                <input type="time" name="start_time" placeholder="YYYY-MM-DD" value={formData.start_time} onChange={handleChange}
                                       required/>
                            </div>
                            <div className="form-group">
                                <label>Juftlik tugashi:</label>
                                <input type="time" name="end_time" placeholder="YYYY-MM-DD" value={formData.end_time} onChange={handleChange}
                                       required/>
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

export default ModalSchedule;