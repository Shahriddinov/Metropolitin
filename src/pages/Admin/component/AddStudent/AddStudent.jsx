import React, {useState} from 'react';
import Home from "../Home/Home";
import ModalGroup from "../AddGroup/ModalGroup/ModalGroup";
import TableGroup from "../AddGroup/TableGroup/TableGroup";
import ModalStudent from "./ModalStudent/ModalStudent";
import TableStudent from "./TableStudent/TableStudent";

const AddStudent = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        fio: '',
        mutaxassislik: '',
        idPassport: '',
        studyYear:'',
        talimTuri: '',
        ishJoyi: '',
        jshshir: '',
        guruh:'',
        tugilgan:''
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
            studyYear:'',
            talimTuri: '',
            ishJoyi: '',
            jshshir: '',
            guruh:'',
            tugilgan:''
        });
        handleCloseModal();
    };
    return (
        <Home>
            <div className="addTeacher">
                <button className="add-teacher-btn" onClick={handleShowModal}>+ Talaba Qo'shish</button>
                <ModalStudent
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formData={formData}
                />
                <TableStudent data={tableData} />
            </div>
        </Home>
    );
};

export default AddStudent;