import React, { useEffect, useState } from 'react';
import Home from "../Home/Home";
import ModalStudent from "./ModalStudent/ModalStudent";
import TableStudent from "./TableStudent/TableStudent";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../../../redux/AddStudent/studentSlice";
import { setPage } from "../../../../redux/getStudentSlice";
import { getStudent } from "../../../../redux/getStudentSlice/getStudentSlice";
import { getAllGroups } from "../../../../redux/getGroupSlice/getGroupSlice";

const AddStudent = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.AddStudent.loading);
    const studentsData = useSelector((state) => state.AddStudent.postStudent);
    const { allGroups, status: groupsStatus, error: groupsError } = useSelector((state) => state.GetAllGroups);

    const { students, limit, offset, page, status, error } = useSelector((state) => state.AllStudent);
    const [formData, setFormData] = useState({
        fullname: "",
        birthday: "",
        gender: "",
        passport: "",
        jshshr: '',
        adress: "",
        group: '',
        expertise: "",
        place_of_birth: "",
        work_place: "",
        study_period: "",
        study_type: "",
        avatar: null
    });

    useEffect(() => {
        dispatch(getStudent({ limit, offset }));
        dispatch(getAllGroups());
    }, [limit, offset, dispatch]);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        let formattedValue = value;

        if (name === 'passport') {
            formattedValue = formattedValue.toUpperCase().replace(/[^A-Z0-9]/g, '');
            const regex = /^([A-Z]{0,2})([0-9]{0,7})$/;
            const match = formattedValue.match(regex);
            if (match) {
                formattedValue = `${match[1]}${match[2]}`;
            } else {
                formattedValue = formData.passport;
            }
        } else if (name === 'jshshr') {
            formattedValue = formattedValue.replace(/[^0-9]/g, '').slice(0, 14);
        } else if (name === 'avatar') {
            setFormData({
                ...formData,
                [name]: files[0]
            });
            return;
        }

        setFormData({
            ...formData,
            [name]: formattedValue
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        dispatch(addStudent(formDataToSend)).then(() => {
            dispatch(getStudent({ limit, offset }));
        });

        setFormData({
            fullname: "",
            expertise: "",
            passport: "",
            birthday: "",
            gender: "",
            jshshr: '',
            adress: "",
            group: '',
            place_of_birth: "",
            work_place: "",
            study_period: "",
            study_type: "",
            avatar: null
        });
        handleCloseModal();
    };


    const handlePageChange = (newPage) => {
        dispatch(setPage(newPage));
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
                    groupsData={ allGroups || []}
                />
                {status === 'loading' && <p>Loading...</p>}
                {status === 'succeeded' && <TableStudent data={students || []} />}
                {status === 'failed' && <p>{error}</p>}
                <div className="pagination-container">
                    <button
                        className="pagination-button"
                        disabled={page === 1}
                        onClick={() => handlePageChange(page - 1)}
                    >
                        Previous
                    </button>
                    <span className="pagination-page">Page {page}</span>
                    <button
                        className="pagination-button"
                        onClick={() => handlePageChange(page + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </Home>
    );
};

export default AddStudent;
