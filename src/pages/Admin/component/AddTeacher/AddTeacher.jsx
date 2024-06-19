import React, {useState} from 'react';
import Home from "../Home/Home";
import "./style.scss"
import TeacherModal from "./ModalTeacher/TeacherModal";
import TableTeacher from "./TableTeacher/TableTeacher";
const AddTeacher = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        fio: '',
        mutaxassislik: '',
        idPassport: '',
        talimTuri: '',
        ishJoyi: '',
        jshshir: ''
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
            fio: '',
            mutaxassislik: '',
            idPassport: '',
            talimTuri: '',
            ishJoyi: '',
            jshshir: ''
        });
        handleCloseModal();
    };

    return (
        <Home>
            <div className="addTeacher">
                <button className="add-teacher-btn" onClick={handleShowModal}>+ O'qituvchi qo'shish</button>
                <TeacherModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formData={formData}
                />
                <TableTeacher data={tableData} />
            </div>
        </Home>
    );
};

export default AddTeacher;