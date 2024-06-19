import React, {useState} from 'react';
import ModalStudent from "../AddStudent/ModalStudent/ModalStudent";
import TableStudent from "../AddStudent/TableStudent/TableStudent";
import Home from "../Home/Home";
import TableScience from "./TableScience/TableScience";
import ModalScience from "./ModalScience/ModalScience";

const AddScience = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        science: '',
        lessonTime: '',
        studyYear:'',
        employee: '',
        training: '',
        group:'',
    });
    const [tableData, setTableData] = useState([]);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTableData([...tableData, formData]);
        setFormData({
            science: '',
            lessonTime: '',
            studyYear:'',
            employee: '',
            training: '',
            group:'',

        });
        handleCloseModal();
    };
    return (
        <Home>
            <div className="addTeacher">
                <button className="add-teacher-btn" onClick={handleShowModal}>+ Fan Yaratish</button>
                <ModalScience
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formData={formData}
                />
                <TableScience data={tableData} />
            </div>
        </Home>
    );
};

export default AddScience;