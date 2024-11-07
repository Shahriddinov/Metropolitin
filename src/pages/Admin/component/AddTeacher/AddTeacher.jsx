import React, { useEffect, useState } from 'react';
import Home from "../Home/Home";
import "./style.scss";
import TeacherModal from "./ModalTeacher/TeacherModal";
import TableTeacher from "./TableTeacher/TableTeacher";
import { useDispatch, useSelector } from "react-redux";
import {addTeachers, updateTeacher, deleteTeacher, getTeacher, getTeachers} from "../../../../redux/TeacherSlice";
import TeacherSlice, { setPage } from "../../../../redux/TeacherSlice/teacherSlice";
import { IoMdSearch } from "react-icons/io";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getAllGroups} from "../../../../redux/GroupSlice";
import ReactPaginate from 'react-paginate';
import {useLocation, useNavigate} from "react-router-dom";
import PaginationComponent from "../../../../components/Pagination/Pagination"; // Import react-paginate

const AddTeacher = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [selectedTeacherId, setSelectedTeacherId] = useState(null);
    const dispatch = useDispatch();
    const { teachers, status, error, totalPages } = useSelector((state) => state.TeacherSlice);
    const { allGroups } = useSelector((state) => state.GroupSlice);
    const limit = 20;
    const currentPage = 1;
    const totalCount = useSelector((state) => state.TeacherSlice.totalCount);
    const [preview, setPreview] = useState(null);
    const getQueryParams = () => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get('page')) || 1; // Default to page 1 if not specified
        const search = params.get('search') || '';
        return { page, search };
    };
    const { page, search } = getQueryParams();
    const offset = (page - 1) * limit; // Calculate offset for pagination

    const [formData, setFormData] = useState({
        fullname: "",
        expertise: "",
        passport: "",
        birthday: "",
        gender: "",
        jshshr: '',
        adress: "",
        place_of_birth: "",
        work_place: "",
        avatar: null
    });
    useEffect(() => {
        dispatch(getAllGroups());
        dispatch(getTeacher({ limit, offset, fullname: search }));
    }, [limit, offset, searchQuery, dispatch]);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleEdit = (teacher) => {
        setEditMode(true); // Enter edit mode
        setSelectedTeacherId(teacher.id); // Set the selected teacher ID
        setFormData({
            fullname: teacher.fullname,
            expertise: teacher.expertise,
            passport: teacher.user.passport,
            birthday: teacher.birthday,
            gender: teacher.gender,
            jshshr: teacher.user.jshshr,
            adress: teacher.adress,
            place_of_birth: teacher.place_of_birth,
            work_place: teacher.work_place,
            avatar: teacher.avatar instanceof Blob ? teacher.avatar : null // Ensure this is a Blob or set to null
        });
        handleShowModal();
    };
    useEffect(() => {
        if (formData.avatar) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result); // Assuming setPreview is a state to hold the image preview
            };
            reader.readAsDataURL(formData.avatar); // Ensure avatar is a File object
        } else {
            setPreview(null); // Handle cases where there is no file
        }
    }, [formData.avatar]);

    const handleDelete = (teacherId) => {
        dispatch(deleteTeacher(teacherId)).then((action) => {
            if (action.meta.requestStatus === 'fulfilled') {
                toast.success("Teacher successfully deleted!"); // Show success notification
            } else if (action.meta.requestStatus === 'rejected') {
                toast.error("Error occurred while deleting the teacher."); // Show error notification
            }
            dispatch(getTeachers({ limit, offset, fullname: searchQuery }));
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });
        if (editMode) {
            dispatch(updateTeacher({id: selectedTeacherId, payload: data})).then(() => {
                toast.success("O'qituvchi muvaffaqiyatli yangilandi!");
                dispatch(getTeachers({limit, offset}));
            })
                .catch(() => {
                    toast.error("Xatolik yuz berdi, jadval yangilanmadi.");
                });
        } else {
            dispatch(addTeachers(data)).then(() => {
                toast.success("O'qituvchi muvaffaqiyatli qo'shildi!");
                dispatch(getTeachers({ limit, offset, fullname: searchQuery }));
            })
                .catch(() => {
                    toast.error("Xatolik yuz berdi, o'qituvchi qo'shilmadi.");
                });

        }

        setFormData({
            fullname: "",
            expertise: "",
            passport: "",
            birthday: "",
            gender: "",
            jshshr: '',
            adress: "",
            place_of_birth: "",
            work_place: "",
            avatar: null
        });
        handleCloseModal();
    };

    const handlePageClick = (pageNumber) => {
        navigate(`?page=${pageNumber}&search=${search}`);
    };

    const noTeachersMessage = teachers.length === 0 && searchQuery ? "User mavjud emas" : null;

    return (
        <Home>
            <div className="addTeacher">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <button className="add-teacher-btn" onClick={handleShowModal}>+ O'qituvchi Qo'shish</button>
                    <div className="search">
                        <input
                            className="search_inputS"
                            type="search"
                            placeholder="F I O"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <IoMdSearch fontSize="26px" cursor="pointer" onClick={() => dispatch(getTeacher({ limit, offset, fullname: searchQuery }))} />
                    </div>
                </div>
                <TeacherModal
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
                        {noTeachersMessage ? (
                            <p>{noTeachersMessage}</p>
                        ) : (
                            <TableTeacher
                                data={teachers || []}
                                groupsData={allGroups || []}
                                handleDelete={handleDelete}
                                page={page}
                                limit={limit}
                                handleEdit={handleEdit}
                            />
                        )}
                    </>
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

export default AddTeacher;
