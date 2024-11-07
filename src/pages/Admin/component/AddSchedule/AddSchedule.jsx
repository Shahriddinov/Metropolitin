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
import {useLocation, useNavigate} from "react-router-dom";
import PaginationComponent from "../../../../components/Pagination/Pagination";

const AddSchedule = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [selectedScheduleId, setSelectedScheduleId] = useState(null);
    const limit = 20;
    const currentPage = 1;
    const {
        schedules,
        loading,
        status,
        totalCount,
        postSchedule,
    } = useSelector((state) => state.ScheduleSlice); // Accessing the combined schedule state
    const { teachersAll } = useSelector((state) => state.TeacherSlice);
    const { allGroups } = useSelector((state) => state.GroupSlice);
    const { scienceList } = useSelector((state) => state.ScienceSlice);

    const [showModal, setShowModal] = useState(false);
    const getQueryParams = () => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get('page')) || 1; // Default to page 1 if not specified
        const search = params.get('search') || '';
        return { page, search };
    };

    const { page, search } = getQueryParams();
    const offset = (page - 1) * limit; // Calculate offset for pagination

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
        dispatch(getSchedule({ limit, offset }));
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
            dispatch(getSchedule({ page: currentPage, limit: 20 }));
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            dispatch(updateSchedule({ id: selectedScheduleId, payload: formData })).then((action) => {
                if (action.meta.requestStatus === 'fulfilled') {
                    toast.success("Jadval muvaffaqiyatli yangilandi!");
                    dispatch(getSchedule({ page: currentPage, limit: 20})); // Fetch the updated schedule
                } else {
                    toast.error("Xatolik yuz berdi, jadval yangilanmadi.");
                }
            });
        } else {
            dispatch(addSchedule(formData)).then((action) => {
                if (action.meta.requestStatus === 'fulfilled') {
                    toast.success("Dars jadvali muvaffaqiyatli qo'shildi!");
                    dispatch(getSchedule({page: currentPage, limit: 20 })); // Fetch the updated schedule
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


    const handlePageClick = (pageNumber) => {
        navigate(`?page=${pageNumber}`);
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
                    teacherData={teachersAll || []}
                    groupsData={allGroups || []}
                    scienceData={scienceList || []}
                />
                {status === 'loading' && <p>Loading...</p>}
                {status === 'succeeded' && (
                    <TableSchedule
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        data={schedules || []}
                        page={page}
                        currentPage={currentPage}
                        limit={limit}
                    />
                )}
                
                <div className="pagination-container">
                    <PaginationComponent
                        count={Math.ceil(totalCount / limit) } // Calculate total pages
                        currentPage={page} // Current page from query params
                        onPageChange={handlePageClick}
                    />
                </div>
            </div>
            <ToastContainer />
        </Home>
    );
};

export default AddSchedule;
