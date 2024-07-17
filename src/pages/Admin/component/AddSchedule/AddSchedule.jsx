import React, {useEffect, useState} from 'react';
import Home from "../Home/Home";
import ModalSchedule from "./ModalSchedule/ModalSchedule";
import TableSchedule from "./TableSchedule/TableSchedule";
import "./addSchedule.scss"
import {useDispatch, useSelector} from "react-redux";
import {addSciences} from "../../../../redux/AddScience/addScienceSlice";
import {getAllScience, getScience} from "../../../../redux/getScienceSlice/getScienceSlice";
import {addSchedule} from "../../../../redux/AddSchedule/addScheduleSlice";
import {getTeachers} from "../../../../redux/getTeacherSlice/getTeacherSlice";
import {getAllGroups} from "../../../../redux/getGroupSlice/getGroupSlice";
import {getSchedule} from "../../../../redux/getScheduleSlice";
import {setPage} from "../../../../redux/getStudentSlice";
import TableScience from "../AddScience/TableScience/TableScience";

const AddSchedule = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.addSchedule.loading);
    const scheduleData = useSelector((state) => state.addSchedule.postSchedule);
    const {schedules,  limit, offset, page, status, error} = useSelector((state) => state.getSchedule); // Adjust state access
    const {teacher, status: teacherStatus, error: teacherError} = useSelector((state) => state.teacherReducer); // Adjust state access
    const {allGroups, status: groupsStatus, error: groupsError} = useSelector((state) => state.GetAllGroups); // Adjust state access
    const {science, } = useSelector((state) => state.getAllScience); // Adjust state access

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const [formData, setFormData] = useState({
        title: '',
        day: '',
        start_time: '',
        end_time: '',
        group: '',
        course: '',
        teacher: ''
    });
    // console.log(teacher)
    useEffect(() => {

        dispatch(getSchedule({limit, offset}));
        dispatch(getAllScience());
        dispatch(getTeachers());
        dispatch(getAllGroups());
    }, [limit, offset, dispatch]);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSchedule(formData)).then(() => {
            dispatch(getSchedule({limit, offset}));
        });
        setFormData({
            title: '',
            day: '',
            start_time: '',
            end_time: '',
            group: '',
            course: '',
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
                <button className="add-teacher-btn" onClick={handleShowModal}>+ Dars jadvali yaratish</button>
                <ModalSchedule
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formData={formData}
                    teacherData={teacher || []}
                    groupsData={allGroups || []}
                    scienceData={science || []}
                />

                {status === 'loading' && <p>Loading...</p>}
                {status === 'succeeded' && <TableSchedule
                    data={schedules || []}
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

export default AddSchedule;