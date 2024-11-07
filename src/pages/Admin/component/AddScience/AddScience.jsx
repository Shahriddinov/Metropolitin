import React, { useEffect, useState } from 'react';
import Home from "../Home/Home";
import TableScience from "./TableScience/TableScience";
import ModalScience from "./ModalScience/ModalScience";
import { useDispatch, useSelector } from "react-redux";
import {addSciences, updateScience, getScience, deleteScience, getAllScience} from "../../../../redux/ScienceSlice";

import { getTeachers } from "../../../../redux/TeacherSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getAllGroups} from "../../../../redux/GroupSlice";
import {setPage} from "../../../../redux/LibrarySlice/librarySlice";
import {useLocation, useNavigate} from "react-router-dom";
import PaginationComponent from "../../../../components/Pagination/Pagination";

const AddScience = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const [editMode, setEditMode] = useState(false); // To track if we are in edit mode
    const [selectedScienceId, setSelectedScienceId] = useState(null); // To store the selected science ID for updating

    const dispatch = useDispatch();
    const { scienceList,  status, error } = useSelector((state) => state.ScienceSlice);
    const { teachers } = useSelector((state) => state.TeacherSlice);
    const { allGroups } = useSelector((state) => state.GroupSlice);
    const limit = 20;
    const currentPage = 1;
    const totalCount = useSelector((state) => state.ScienceSlice.totalCount);
    const getQueryParams = () => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get('page')) || 1; // Default to page 1 if not specified
        const search = params.get('search') || '';
        return { page, search };
    };

    const { page, search } = getQueryParams();
    const offset = (page - 1) * limit; // Calculate offset for pagination

    const [formData, setFormData] = useState({
        name: "",
        study_period: "",
        training: "",
        lesson_day: '2024-10-08',
        group: '',
        teacher: ''
    });

    useEffect(() => {
        dispatch(getScience({ limit, offset }));
        dispatch(getTeachers());
        dispatch(getAllGroups());
    }, [limit, offset, dispatch]);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setEditMode(false); // Reset edit mode
        setFormData({
            name: "",
            study_period: "",
            training: "",
            lesson_day: '2024-10-08',
            group: '',
            teacher: ''
        });
    };

    const handleEdit = (science) => {
        setEditMode(true); // Enter edit mode
        setSelectedScienceId(science.id); // Set the selected science ID
        setFormData({
            name: science.name,
            study_period: science.study_period,
            training: science.training,
            lesson_day: science.lesson_day,
            group: science.group,
            teacher: science.teacher
        });
        handleShowModal();
    };

    const handleDelete = (scienceId) => {
        dispatch(deleteScience(scienceId)).then((action) => {
            if (action.meta.requestStatus === 'fulfilled') {
                toast.success("Science successfully deleted!");
                dispatch(getScience({page: currentPage, limit: 20}))
            } else {
                toast.error("Error occurred while deleting the science.");
            }
            dispatch(getScience({ limit, offset }));
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            dispatch(updateScience({ id: selectedScienceId, payload: formData })).then(() => {
                toast.success("Fan muvaffaqiyatli yangilandi!");
                dispatch(getScience({ limit, offset }));
            })
                .catch(() => {
                    toast.error("Xatolik yuz berdi, fan yangilanmadi.");
                });
        } else {
            dispatch(addSciences(formData)).then(() => {
                toast.success("Fan muvaffaqiyatli qo'shildi!");
                dispatch(getScience({ limit, offset }));
            })
                .catch(() => {
                    toast.error("Xatolik yuz berdi, fan qo'shilmadi.");
                });
        }
        handleCloseModal();
    };

    const handlePageClick = (pageNumber) => {
        navigate(`?page=${pageNumber}&search=${search}`);
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
                    teacherData={teachers || []}
                    groupsData={allGroups || []}
                />
                {status === 'loading' && <p>Loading...</p>}
                {status === 'succeeded' && <TableScience
                    data={scienceList || []}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit} // Pass the handleEdit function to TableScience
                    teacherData={teachers || []}
                    groupsData={allGroups || []}
                    page={page}
                    currentPage={currentPage}
                    limit={limit}
                />}
                {status === 'failed' && <p>{error}</p>}
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

export default AddScience;
