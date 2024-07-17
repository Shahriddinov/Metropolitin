import React from 'react';
import './settingsModal.scss';

const SettingsModal = ({onClose}) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <form className="settings-form">
                    <div className="form-group">
                        <label>Test nomi:</label>
                        <input type="text" placeholder="Test nomi....."/>
                    </div>
                    <div className="form-group">
                        <label>Guruh:</label>
                        <input type="text" placeholder="Guruh"/>
                    </div>
                    <div className="form-group">
                        <label>Savol tartibi:</label>
                        <input type="text" placeholder="Savol tartibi"/>
                    </div>
                    <div className="form-group">
                        <label>Javob tartibi:</label>
                        <input type="text" placeholder="Javob tartibi"/>
                    </div>
                    <div className="form-group">
                        <label>Savollar chegarasi:</label>
                        <input type="number" placeholder="00"/>
                    </div>
                    <div className="form-group">
                        <label>Test davomiyligi:</label>
                        <input type="time" placeholder="00.00.00"/>
                    </div>
                    <div className="form-group">
                        <label>Boshlanish sanasi:</label>
                        <input type="date" placeholder="00/00/2024"/>
                    </div>
                    <div className="form-group">
                        <label>Tugash sanasi:</label>

                        <input type="date" placeholder="00/00/2024"/>
                    </div>
                    <div className="form-group">
                        <label>O'tish bal:</label>
                        <input type="text" placeholder="60%"/>
                    </div>
                    <button type="submit" className="save-button">Saqlash</button>
                </form>
            </div>
        </div>
    );
};

export default SettingsModal;
