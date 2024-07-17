import React from 'react';

const ModalStudent = ({show, handleClose, handleSubmit, handleChange, formData, groupsData}) => {

    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Talaba</h2>
                    <span className="close" onClick={handleClose}>&times;</span>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>F I O</label>
                                <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Mutaxassislik</label>
                                <input type="text" name="expertise" value={formData.expertise}
                                       onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>O'quv yili</label>
                                <input type="date" name="study_period" value={formData.study_period} onChange={handleChange} placeholder="YYYY-MM-DD"
                                       required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>ID/Passport (seriya raqam)</label>
                                <input type="text" name="passport" value={formData.passport} onChange={handleChange}
                                       required/>
                            </div>
                            <div className="form-group">
                                <label>Ta'lim turi</label>
                                <input type="text" name="study_type" value={formData.study_type} onChange={handleChange}
                                       required/>
                            </div>
                            <div className="form-group">
                                <label>Tug'ilgan joyi</label>
                                <input type="text" name="place_of_birth" value={formData.place_of_birth} onChange={handleChange}
                                       required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Ish joyi</label>
                                <input type="text" name="work_place" value={formData.work_place} onChange={handleChange}
                                       required/>
                            </div>
                            <div className="form-group">
                                <label>Guruh</label>
                                <select name="group" value={formData.group} onChange={handleChange} style={{ padding: "7px" }} required>
                                    <option value="" disabled>Tanlang</option>
                                    {groupsData && groupsData.map((groups) => (
                                        <option key={groups.id} value={groups?.id}>{groups?.name}</option>
                                    ))}
                                </select>

                            </div>
                            <div className="form-group">
                                <label>JSHSHIR (PINFL)</label>
                                <input type="number" name="jshshr" value={formData.jshshr} onChange={handleChange}
                                       required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Tug'ilgan sanasi</label>
                                <input type="date" name="birthday" placeholder="YYYY-MM-DD" value={formData.birthday} onChange={handleChange}
                                       required/>
                            </div>
                            <div className="form-group">
                                <label>Manzil</label>
                                <input type="text" name="adress" value={formData.adress} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Jinsi</label>
                                <select name="gender" value={formData.gender} style={{padding:"7px"}} onChange={handleChange} required>
                                    <option value="" className="input">Tanlang</option>
                                    <option value="male">Erkak</option>
                                    <option value="female">Ayol</option>
                                </select>
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Avatar</label>
                                <input type="file" name="avatar" onChange={handleChange} />
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

export default ModalStudent;
