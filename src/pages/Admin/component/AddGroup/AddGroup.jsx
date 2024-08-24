import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "../Home/Home";
import ModalGroup from "./ModalGroup/ModalGroup";
import TableGroup from "./TableGroup/TableGroup";
import {addGroups, deleteGroup, getAllGroups, getGroup, updateGroup} from "../../../../redux/GroupSlice";
import {setPage} from "../../../../redux/LibrarySlice/librarySlice"; // Adjust the import path as necessary
// import { setPage } from "../../../../redux/StudentSlice/";


const AddGroup = ({ data }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedGroupId, setSelectedGroupId] = useState(null);

    const { allGroups = [], limit, offset, page, status, error } = useSelector((state) => state.GroupSlice  || {});
    const [formData, setFormData] = useState({
        name: '',
        study_period: '',
        training_hour: ''
    });

    useEffect(() => {
        dispatch(getGroup()); // Adjusted to use the getAllGroups action
    }, [dispatch]);

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
                dispatch(getAllGroups());
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

    const handlePageChange = (newPage) => {
        dispatch(setPage(newPage));
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
                        data={allGroups || []} // Updated to use the allGroups array from the combined slice
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

export default AddGroup;
