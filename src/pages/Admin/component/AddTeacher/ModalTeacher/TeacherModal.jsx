import React, { useState, useEffect } from 'react';
import './teacherModal.scss';

const TeacherModal = ({ show, handleClose, handleSubmit, handleChange, formData, groupsData }) => {
    const [avatarPreview, setAvatarPreview] = useState(null);

    useEffect(() => {
        if (formData.avatar) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result);
            };
            reader.readAsDataURL(formData.avatar);
        } else {
            setAvatarPreview(null);
        }
    }, [formData.avatar]);

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
                                <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Mutaxassislik</label>
                                <input type="text" name="expertise" value={formData.expertise} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Tug'ilgan sanasi</label>
                                <input type="date" name="birthday" placeholder="YYYY-MM-DD" value={formData.birthday} onChange={handleChange} required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>ID/Passport (seriya raqam)</label>
                                <input type="text" name="passport" value={formData.passport} onChange={handleChange} required/>
                            </div>

                            <div className="form-group">
                                <label>Tug'ilgan joyi</label>
                                <input type="text" name="place_of_birth" value={formData.place_of_birth} onChange={handleChange} required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Ish joyi</label>
                                <input type="text" name="work_place" value={formData.work_place} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>JSHSHIR (PINFL)</label>
                                <input type="number" name="jshshr" value={formData.jshshr} onChange={handleChange} required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Manzil</label>
                                <input type="text" name="adress" value={formData.adress} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Jinsi</label>
                                <select name="gender" value={formData.gender} style={{ padding: "7px" }} onChange={handleChange} required>
                                    <option value="default" className="input">Tanlang</option>
                                    <option value="male">Erkak</option>
                                    <option value="female">Ayol</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Avatar</label>
                                <input type="file" name="avatar" onChange={handleChange} />
                                {/*{avatarPreview && (*/}
                                {/*    <div className="avatar-preview">*/}
                                {/*        <img src={avatarPreview} alt="Avatar Preview" />*/}
                                {/*    </div>*/}
                                {/*)}*/}
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
