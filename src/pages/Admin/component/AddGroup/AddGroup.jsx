import React, {useEffect, useState} from 'react';

import Home from "../Home/Home";
import ModalGroup from "./ModalGroup/ModalGroup";
import TableGroup from "./TableGroup/TableGroup";
import {useDispatch, useSelector} from "react-redux";
import {addGroups} from "../../../../redux/AddGroupSlice/addGroupSlice";
import {getScience} from "../../../../redux/getScienceSlice/getScienceSlice";
import {getTeachers} from "../../../../redux/getTeacherSlice/getTeacherSlice";
import {getGroup} from "../../../../redux/getGroupSlice/getGroupSlice";
import TableScience from "../AddScience/TableScience/TableScience";
import {setPage} from "../../../../redux/getStudentSlice";

const AddGroup = ({ data }) => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();
    const groupData = useSelector((state) => state.GroupSlice.postGroup);
    const { groups, limit, offset, page, status, error } = useSelector((state) => state.GetGroup);

    const [formData, setFormData] = useState({
        name: '',
        study_period: '',
        training_hour: ''
    });
    useEffect(() => {

        dispatch(getGroup({ limit, offset }));

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
        dispatch(addGroups(formData)).then(() => {
            dispatch(getGroup({ limit, offset }));
        });
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
                <button className="add-teacher-btn" onClick={handleShowModal}>+ Guruh yaratish</button>
                <ModalGroup
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formData={formData}
                />
                {status === 'loading' && <p>Loading...</p>}
                {status === 'succeeded' && <TableGroup data={groups || []} />}
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

export default AddGroup;