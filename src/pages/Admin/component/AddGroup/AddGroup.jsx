import React, {useState} from 'react';
import TeacherModal from "../AddTeacher/ModalTeacher/TeacherModal";
import TableTeacher from "../AddTeacher/TableTeacher/TableTeacher";
import Home from "../Home/Home";
import ModalGroup from "./ModalGroup/ModalGroup";
import TableGroup from "./TableGroup/TableGroup";

const AddGroup = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        group: '',
        exsperiense: '',
        yearId: ''
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
            group: '',
            exsperiense: '',
            yearId: ''
        });
        handleCloseModal();
    };
    return (
        <Home>
            <div className="addTeacher">
                <button className="add-teacher-btn" onClick={handleShowModal}>+ Guruh yaratish</button>
                <ModalGroup
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formData={formData}
                />
                <TableGroup data={tableData} />
            </div>
        </Home>
    );
};

export default AddGroup;