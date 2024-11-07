import React, {useEffect, useState} from 'react';
import Home from '../Home/Home';
import ModalStudent from './ModalStudent/ModalStudent';
import TableStudent from './TableStudent/TableStudent';
import {useDispatch, useSelector} from 'react-redux';
import {
    addStudent,
    updateStudent,
    deleteStudent,
    getStudent,
    getOfferStudent,
    setPage
} from '../../../../redux/StudentSlice';
import {AiOutlineDelete} from 'react-icons/ai';
import {IoMdSearch} from 'react-icons/io';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getAllGroups} from "../../../../redux/GroupSlice";
import ReactPaginate from 'react-paginate';
import {useLocation, useNavigate} from "react-router-dom";
import PaginationComponent from "../../../../components/Pagination/Pagination"; // Import ReactPaginate

const AddStudent = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const students = useSelector(state => state.StudentSlice.students);
    const loading = useSelector(state => state.StudentSlice.status) === 'loading';
    const {allGroups} = useSelector((state) => state.GroupSlice);
    const limit = 20;
    const currentPage = 1;
    const totalCount = useSelector((state) => state.StudentSlice.totalCount);
    const getQueryParams = () => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get('page')) || 1; // Default to page 1 if not specified
        const search = params.get('search') || '';
        return { page, search };
    };

    const { page, search } = getQueryParams();
    const offset = (page - 1) * limit; // Calculate offset for pagination


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
        dispatch(getOfferStudent({limit, offset, fullname: search}));
        dispatch(getAllGroups());
    }, [dispatch, limit,offset,  searchQuery]);

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
            group: student.group.id,
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
                dispatch(getOfferStudent({page: currentPage, limit: 20, fullname: searchQuery})); // Refresh the student list
            } else {
                toast.error("Error occurred while deleting the student.");
            }
        });
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleChange = (e) => {
        const {name, value, files} = e.target;
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
                resultAction = await dispatch(updateStudent({id: selectedStudentId, payload: formDataToSend}));
            } else {
                resultAction = await dispatch(addStudent(formDataToSend));
            }

            if (resultAction.type.endsWith('fulfilled')) {
                toast.success(editMode ? "O'quvchi muvaffaqiyatli yangilandi!" : "O'quvchi muvaffaqiyatli qo'shildi!");
                dispatch(getOfferStudent({page: currentPage, limit: 20, fullname: searchQuery}));
            } else {
                const errorResponse = resultAction.payload;
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




    const handlePageClick = (pageNumber) => {
        navigate(`?page=${pageNumber}&search=${search}`);
    };

    const noStudentsMessage = students.length === 0 && searchQuery ? "User mavjud emas" : null;

    return (
        <Home>
            <div className="addStudent">
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <button className="add-teacher-btn" onClick={handleShowModal}>+ Talaba Qo'shish</button>
                    <form className="search" onSubmit={(e) => e.preventDefault()}>
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
                            onClick={() => dispatch(getOfferStudent({
                                page: currentPage,
                                limit: 10,
                                fullname: searchQuery
                            }))}
                        />
                    </form>
                </div>
                <ModalStudent
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formData={formData}
                    groupsData={allGroups || []}
                />
                {loading && <p>Loading...</p>}
                {!loading && (
                    <>
                        {noStudentsMessage ? (
                            <p>{noStudentsMessage}</p>
                        ) : (
                            <TableStudent
                                handleStudentDelete={handleStudentDelete}
                                handleEdit={handleEdit}
                                page={page}
                                currentPage={currentPage}
                                limit={limit}
                                data={students || []}
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
            <ToastContainer/>
        </Home>
    );
};

export default AddStudent;
