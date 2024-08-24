import React, { useEffect, useState } from 'react';
import Home from "../Home/Home";
import ModalSchedule from "./ModalSchedule/ModalSchedule";
import TableSchedule from "./TableSchedule/TableSchedule";
import "./addSchedule.scss";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    addSchedule,
    deleteSchedule,
    updateSchedule,
    getSchedule,
    getScheduleAll
} from "../../../../redux/ScheduleSlice"; // Update the imports to match the combined slice
import { getAllScience } from "../../../../redux/ScienceSlice";
import { getTeachers } from "../../../../redux/TeacherSlice";
import { getAllGroups } from "../../../../redux/GroupSlice";
import {setPage} from "../../../../redux/LibrarySlice/librarySlice";

const AddSchedule = () => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [selectedScheduleId, setSelectedScheduleId] = useState(null);

    const {
        schedules,
        loading,
        status,
        error,
        limit,
        offset,
        page,
        postSchedule,
    } = useSelector((state) => state.ScheduleSlice); // Accessing the combined schedule state
    const { teacher } = useSelector((state) => state.TeacherSlice);
    const { allGroups } = useSelector((state) => state.GroupSlice);
    const { science } = useSelector((state) => state.ScienceSlice);

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

    useEffect(() => {
        dispatch(getScheduleAll({ limit, offset }));
        dispatch(getAllScience());
        dispatch(getTeachers());
        dispatch(getAllGroups());
    }, [limit, offset, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEdit = (schedule) => {
        setEditMode(true);
        setSelectedScheduleId(schedule.id);
        setFormData({
            title: schedule.title,
            day: schedule.day,
            start_time: schedule.start_time,
            end_time: schedule.end_time,
            group: schedule.group.id,
            course: schedule.course.id,
            teacher: schedule.teacher.id
        });
        handleShowModal();
    };

    const handleDelete = (scheduleId) => {
        dispatch(deleteSchedule(scheduleId)).then((action) => {
            if (action.meta.requestStatus === 'fulfilled') {
                toast.success("Schedule successfully deleted!");
            } else if (action.meta.requestStatus === 'rejected') {
                toast.error("Error occurred while deleting the schedule.");
            }
            dispatch(getScheduleAll({ limit, offset }));
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            dispatch(updateSchedule({ id: selectedScheduleId, payload: formData })).then((action) => {
                if (action.meta.requestStatus === 'fulfilled') {
                    toast.success("Jadval muvaffaqiyatli yangilandi!");
                    dispatch(getScheduleAll({ limit, offset })); // Fetch the updated schedule
                } else {
                    toast.error("Xatolik yuz berdi, jadval yangilanmadi.");
                }
            });
        } else {
            dispatch(addSchedule(formData)).then((action) => {
                if (action.meta.requestStatus === 'fulfilled') {
                    toast.success("Dars jadvali muvaffaqiyatli qo'shildi!");
                    dispatch(getScheduleAll({ limit, offset })); // Fetch the updated schedule
                } else {
                    toast.error("Xatolik yuz berdi, Dars jadvali qo'shilmadi.");
                }
            });
        }

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
                {status === 'succeeded' && (
                    <TableSchedule
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        data={schedules || []}
                    />
                )}
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
            <ToastContainer />
        </Home>
    );
};

export default AddSchedule;
