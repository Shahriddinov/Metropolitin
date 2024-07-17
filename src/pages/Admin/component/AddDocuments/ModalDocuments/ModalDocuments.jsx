import React, { useState } from 'react';

const ModalDocuments = ({ show, handleClose, handleSubmit }) => {
    const [formData, setFormData] = useState({
        command_number: '',
        order_date: '',
        description: '',
        file: null,
        image: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit(formData);
        setFormData({
            command_number: '',
            order_date: '',
            description: '',
            file: null,
            image: null
        });
    };

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
                    <form onSubmit={handleFormSubmit}>
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
