import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import ModalStudent from './ModalStudent/ModalStudent';
import TableStudent from './TableStudent/TableStudent';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, updateStudent, deleteStudent, getStudent } from '../../../../redux/StudentSlice';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoMdSearch } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getAllGroups} from "../../../../redux/GroupSlice";

const AddStudent = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const studentsData = useSelector((state) => state.StudentSlice.postStudent);
    const { allGroups, status: groupsStatus, error: groupsError } = useSelector((state) => state.GroupSlice);
    const { students, limit, offset, page, status, error } = useSelector((state) => state.StudentSlice);
    const [formData, setFormData] = useState({
        fullname: '',
        birthday: '',
        gender: '',
        passport: '',
        jshshr: '',
        adress: '',
        group: '',
        expertise: '',
        place_of_birth: '',
        work_place: '',
        study_period: '',
        study_type: '',
        avatar: null,
    });

    useEffect(() => {
        dispatch(getStudent({ limit, offset, page, fullname: searchQuery }));
        dispatch(getAllGroups());
    }, [limit, offset, dispatch, page, searchQuery]);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleEdit = (student) => {
        setEditMode(true);
        setSelectedStudentId(student.id);
        setFormData({
            fullname: student.fullname,
            birthday: student.birthday,
            gender: student.gender,
            passport: student.user.passport,
            jshshr: student.user.jshshr,
            adress: student.adress,
            group: student.group.id, // Ensure this is a string representing the ID
            expertise: student.expertise,
            place_of_birth: student.place_of_birth,
            work_place: student.work_place,
            study_period: student.study_period,
            study_type: student.study_type,
            avatar: student.avatar,
        });
        handleShowModal();
    };

    const handleStudentDelete = (studentId) => {
        dispatch(deleteStudent(studentId)).then((action) => {
            if (action.meta.requestStatus === 'fulfilled') {
                toast.success("Student successfully deleted!");
            } else if (action.meta.requestStatus === 'rejected') {
                toast.error("Error occurred while deleting the student.");
            }
            dispatch(getStudent({ limit, offset, fullname: searchQuery }));
        });
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

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
                [name]: files[0],
            });
            return;
        }

        setFormData({
            ...formData,
            [name]: formattedValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            let resultAction;
            if (editMode) {
                resultAction = await dispatch(updateStudent({ id: selectedStudentId, payload: formDataToSend }));
            } else {
                resultAction = await dispatch(addStudent(formDataToSend));
            }

            if (resultAction.type.endsWith('fulfilled')) {
                toast.success(editMode ? "O'quvchi muvaffaqiyatli yangilandi!" : "O'quvchi muvaffaqiyatli qo'shildi!");
                dispatch(getStudent({ limit, offset, fullname: searchQuery }));
            } else {
                const errorResponse = resultAction.payload; // Assuming error payload is the response from backend
                if (errorResponse.errors) {
                    if (errorResponse.errors.passport) {
                        toast.error(errorResponse.errors.passport);
                    } else if (errorResponse.errors.jshshr) {
                        toast.error(errorResponse.errors.jshshr);
                    } else {
                        toast.error("Xatolik yuz berdi.");
                    }
                } else {
                    toast.error("Xatolik yuz berdi.");
                }
            }
        } catch (error) {
            toast.error("Xatolik yuz berdi.");
        }

        setFormData({
            fullname: '',
            expertise: '',
            passport: '',
            birthday: '',
            gender: '',
            jshshr: '',
            adress: '',
            group: '',
            place_of_birth: '',
            work_place: '',
            study_period: '',
            study_type: '',
            avatar: null,
        });
        handleCloseModal();
    };



    const handlePageChange = (newPage) => {
        // dispatch(setPage(newPage));
    };

    const noStudentsMessage = students.length === 0 && searchQuery ? "User mavjud emas" : null;

    return (
        <Home>
            <div className="addStudent">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button className="add-teacher-btn" onClick={handleShowModal}>+ Talaba Qo'shish</button>
                    <div className="search">
                        <input
                            className="search_inputS"
                            type="search"
                            placeholder="F I O"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <IoMdSearch
                            fontSize="26px"
                            cursor="pointer"
                            onClick={() => dispatch(getStudent({ limit, offset, fullname: searchQuery }))}
                        />
                    </div>
                </div>
                <ModalStudent
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formData={formData}
                    groupsData={allGroups || []}
                />
                {status === 'loading' && <p>Loading...</p>}
                {status === 'succeeded' && (
                    <>
                        {noStudentsMessage ? (
                            <p>{noStudentsMessage}</p>
                        ) : (
                            <TableStudent
                                handleStudentDelete={handleStudentDelete}
                                handleEdit={handleEdit}
                                data={students || []}
                            />
                        )}
                    </>
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

export default AddStudent;
