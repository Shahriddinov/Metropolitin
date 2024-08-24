import React, { useState } from 'react';
import File from '../../../../../assets/images/file.png';

function ModalLibrary({ show, handleClose, handleChange, formData, handleSubmit }) {





    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Normativ hujjatlar</h2>
                    <span className="close" onClick={handleClose}>
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <div className="library">
                        <div className="upload-section">
                            <form  className="upload-card"  onSubmit={handleSubmit} encType="multipart/form-data">
                                <img src={File} alt="Upload PDF Icon" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Fayl nomini kiriting"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input type="file" name="file" onChange={handleChange} required />
                                <button type="submit" className="save-button">Saqlash</button>
                            </form>
                        </div>
                        <div className="book-list">
                            {/*{pdfFiles.map((file, index) => (*/}
                            {/*    <div className="book-card" key={index}>*/}
                            {/*        <img src={Book} alt="PDF Icon" />*/}
                            {/*        <p>{file.title}</p>*/}
                            {/*        <a href={file.file} download={file.title}>Yuklab olish</a>*/}
                            {/*    </div>*/}
                            {/*))}*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalLibrary;
