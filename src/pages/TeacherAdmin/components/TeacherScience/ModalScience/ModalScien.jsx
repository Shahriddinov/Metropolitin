import React from 'react';
import "./modalScien.scss";

const ModalScience = ({
                          data, show, handleClose, handleSubmit, handleChange, handleFileChange, setSelectedGroup, setSelectedScience, allGroups, scienceList
                      }) => {
    if (!data) return null;
    if (!show) return null;
    const handleGroupChange = (e) => {
        const selectedGroup = allGroups.find(group => group.id === parseInt(e.target.value));
        setSelectedGroup(selectedGroup);
        handleChange({
            target: { name: 'group', value: selectedGroup?.id }
        });  // Update the form data with selected group ID
    };

    const handleScienceChange = (e) => {
        const selectedScience = scienceList.find(science => science.id === parseInt(e.target.value));
        setSelectedScience(selectedScience);
        handleChange({
            target: { name: 'course', value: selectedScience?.id }
        });  // Update the form data with selected science ID
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
                        <label>Fan</label>
                        <select name="course" value={data.course} onChange={handleScienceChange} style={{ padding: "7px" }} required>
                            <option value="" disabled>Tanlang</option>
                            {scienceList && scienceList.map((science) => (
                                <option key={science.id} value={science.id}>{science.name}</option>
                            ))}
                        </select>
                        <label>Guruh</label>
                        <select name="group" value={data.group} onChange={handleGroupChange} style={{ padding: "7px" }} required>
                            <option value="" disabled>Tanlang</option>
                            {allGroups && allGroups.map((group) => (
                                <option key={group.id} value={group.id}>{group.name}</option>
                            ))}
                        </select>

                        <label htmlFor="upload">Topshiriqni yuklash
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
                        </label>
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
