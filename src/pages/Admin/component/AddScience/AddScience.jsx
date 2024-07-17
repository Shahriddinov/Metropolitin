import React, {useEffect, useState} from 'react';

import Home from "../Home/Home";
import TableScience from "./TableScience/TableScience";
import ModalScience from "./ModalScience/ModalScience";
import {useDispatch, useSelector} from "react-redux";
import {addSciences} from "../../../../redux/AddScience/addScienceSlice";
import {setPage} from "../../../../redux/getStudentSlice";
import {getScience} from "../../../../redux/getScienceSlice/getScienceSlice";
import {getTeachers} from "../../../../redux/getTeacherSlice/getTeacherSlice";
import {getAllGroups} from "../../../../redux/getGroupSlice/getGroupSlice";


const AddScience = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const scienceData = useSelector((state) => state.AddScience.postScience);
    const { sciences, limit, offset, page, status, error } = useSelector((state) => state.AllScienceSlice);
    const { teacher, status: teacherStatus, error: teacherError } = useSelector((state) => state.teacherReducer); // Adjust state access
    const { allGroups, status: groupsStatus, error: groupsError } = useSelector((state) => state.GetAllGroups); // Adjust state access

    
    const [formData, setFormData] = useState({
        name: "",
        study_period: "",
        training: "",
        lesson_day: "",
        group: '',
        teacher: ''
    });
    useEffect(() => {

        dispatch(getScience({ limit, offset }));
        dispatch(getTeachers());
        dispatch(getAllGroups());
    }, [limit, offset, dispatch]);

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
        dispatch(addSciences(formData)).then(() => {
            dispatch(getScience({ limit, offset }));
        });
        setFormData({
            name: "",
            study_period: "",
            training: "",
            lesson_day: "",
            group: '',
            teacher: ''

        });
        handleCloseModal();
    };
    const handlePageChange = (newPage) => {
        dispatch(setPage(newPage));
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
                    teacherData = {teacher || []}
                    groupsData={ allGroups || []}
                />
                {status === 'loading' && <p>Loading...</p>}
                {status === 'succeeded' && <TableScience
                    data={sciences || []}
                    teacherData = {teacher || []}
                    groupsData={ allGroups || []}
                />}
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

export default AddScience;