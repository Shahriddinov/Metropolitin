import React from 'react';
import "./modalScien.scss";

const ModalScience = ({ data, show, handleClose, handleSubmit, handleChange, handleFileChange, scienceData, setSelectedScience }) => {
    if (!data) return null;
    if (!show) return null;

    const handleScienceChange = (e) => {
        const selectedScience = scienceData.find(science => science.id === parseInt(e.target.value));
        setSelectedScience(selectedScience);
        handleChange(e);  // Also update the form data
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={handleClose}>&times;</span>
                </div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="modal-body">
                        <label>Muddat</label>
                        <input
                            type="date"
                            placeholder="YYYY-MM-DD"
                            name="finished_date"
                            value={data.finished_date}
                            onChange={handleChange}
                            required
                        />
                        <label>Guruh</label>
                        <select name="course" value={data.course} onChange={handleScienceChange} style={{ padding: "7px" }} required>
                            <option value="" disabled>Tanlang</option>
                            {scienceData && scienceData.map((science) => (
                                <option key={science.id} value={science.id}>{science.name}</option>
                            ))}
                        </select>
                        <label htmlFor="upload">Topshiriqni yuklash</label>
                        <div className="upload-section">
                            <input
                                type="file"
                                id="upload"
                                name="file"
                                onChange={handleFileChange}
                                required
                            />
                            <div className="upload-icon">&#x21E9;</div>
                        </div>
                        <textarea
                            name="description"
                            placeholder="Izoh..."
                            value={data.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button className="save-button" type="submit">Saqlash</button>
                </form>
            </div>
        </div>
    );
};

export default ModalScience;
