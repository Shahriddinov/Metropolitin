import React from 'react';

const ModalDocuments = ({ show, handleClose, handleSubmit, handleChange, formData }) => {
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
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Buyruq raqami</label>
                                <input
                                    type="text"
                                    name="command_number"
                                    value={formData.command_number}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Buyruq sanasi</label>
                                <input
                                    type="date"
                                    name="order_date"
                                    placeholder="YYYY-MM-DD"
                                    value={formData.order_date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Fayl yuklash</label>
                                    <input type="file" name="file" onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Qisqacha mazmuni</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group form-submit">
                            <button className="MButton" type="submit">Upload Document</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalDocuments;
