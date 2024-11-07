import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "../Home/Home";
import ModalGroup from "./ModalGroup/ModalGroup";
import TableGroup from "./TableGroup/TableGroup";
import {addGroups, deleteGroup, getAllGroups, getGroup, updateGroup} from "../../../../redux/GroupSlice";
import {setPage} from "../../../../redux/LibrarySlice/librarySlice";
import {useLocation, useNavigate} from "react-router-dom";
import PaginationComponent from "../../../../components/Pagination/Pagination"; // Adjust the import path as necessary


const AddGroup = ({ data }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedGroupId, setSelectedGroupId] = useState(null);
    const limit = 20;
    const currentPage = 1;
    const { allGroups = [], status, error, totalCount } = useSelector((state) => state.GroupSlice  || {});
    const getQueryParams = () => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get('page')) || 1; // Default to page 1 if not specified
        const search = params.get('search') || '';
        return { page, search };
    };

    const { page, search } = getQueryParams();
    const offset = (page - 1) * limit; // Calculate offset for pagination

    const [formData, setFormData] = useState({
        name: '',
        study_period: '',
        training_hour: ''
    });

    useEffect(() => {
        dispatch(getGroup({limit, offset})); // Adjusted to use the getAllGroups action
    }, [dispatch, limit,offset,]);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleEdit = (group) => {
        setEditMode(true);
        setSelectedGroupId(group.id);
        setFormData({
            name: group.name,
            study_period: group.study_period,
            training_hour: group.training_hour
        });
        handleShowModal();
    };

    const handleDelete = (groupId) => {
        dispatch(deleteGroup(groupId)).then((action) => {
            if (action.meta.requestStatus === 'fulfilled') {
                toast.success("Group successfully deleted!");
                dispatch(getGroup({page: currentPage, limit: 20}))
            } else if (action.meta.requestStatus === 'rejected') {
                toast.error("Error occurred while deleting the group.");
            }
            dispatch(getAllGroups());
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
            dispatch(updateGroup({ id: selectedGroupId, payload: formData })).then(() => {
                toast.success("Group successfully updated!");
                dispatch(getAllGroups());
            }).catch(() => {
                toast.error("Error occurred while updating the group.");
            });
        } else {
            dispatch(addGroups(formData)).then(() => {
                toast.success("Group successfully added!");
                dispatch(getGroup({page: currentPage, limit: 20}));
            }).catch(() => {
                toast.error("Error occurred while adding the group.");
            });
        }

        setFormData({
            name: '',
            study_period: '',
            training_hour: ''
        });
        handleCloseModal();
    };

    const handlePageClick = (pageNumber) => {
        navigate(`?page=${pageNumber}&search=${search}`);
    };

    return (
        <Home>
            <div className="addTeacher">
                <button className="add-teacher-btn" onClick={handleShowModal}>+ Create Group</button>
                <ModalGroup
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formData={formData}
                />
                {status === 'loading' && <p>Loading...</p>}
                {status === 'succeeded' && (
                    <TableGroup
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        page={page}
                        currentPage={currentPage}
                        limit={limit}
                        data={allGroups || []} // Updated to use the allGroups array from the combined slice
                    />
                )}
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

export default AddGroup;
