import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../Home/Home';
import './addLibrary.scss';
import {
    addLibrary,
    deleteLibrary,
    getLibraryAll,
    getOfferLibraryAll,
    updateLibrary
} from '../../../../redux/LibrarySlice';
import { Spinner } from '../../../../components';
import ModalLibrary from "./ModalLibrary/ModalLibrary";
import Book from "../../../../assets/images/books.png";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
import PaginationComponent from "../../../../components/Pagination/Pagination";

const AddLibrary = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [selectedLibraryId, setSelectedLibraryId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const { libraryItems, status, error } = useSelector((state) => state.LibrarySlice);
    const limit = 20;
    const currentPage = 1;
    const totalCount = useSelector((state) => state.LibrarySlice.totalCount);

    const getQueryParams = () => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get('page')) || 1;
        return { page };
    };

    const { page } = getQueryParams();
    const offset = (page - 1) * limit;

    const [formData, setFormData] = useState({
        name: '',
        type: 'artistic',
        file: null,
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    useEffect(() => {

        dispatch(getOfferLibraryAll({ limit, offset }));
    }, [dispatch, limit, offset, page]); // Make sure to include offset here

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editMode) {
                await dispatch(updateLibrary({ id: selectedLibraryId, payload: formData }));
                toast.success("Kitob muvaffaqiyatli yangilandi!");
            } else {
                await dispatch(addLibrary(formData));
                toast.success("Kitob muvaffaqiyatli qo'shildi!");
            }

            dispatch(getOfferLibraryAll({page: currentPage, limit: 20, })); // Refresh the library list
            handleCloseModal();
        } catch (error) {
            toast.error(editMode ? "Xatolik yuz berdi, kitob yangilanmadi." : "Xatolik yuz berdi, kitob qo'shilmadi.");
        }
    };

    if (status === 'loading') {
        return <Spinner />;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const handleShowModal = () => setShowModal(true);

    const handleCloseModal = () => {
        setShowModal(false);
        setEditMode(false);
        setFormData({
            name: '',
            type: 'artistic',
            file: null,
            image: null,
        });
    };

    const handleDelete = (libraryId) => {
        dispatch(deleteLibrary(libraryId)).then((action) => {
            if (action.meta.requestStatus === 'fulfilled') {
                toast.success("Book successfully deleted!");
                dispatch(getOfferLibraryAll({ page: currentPage, limit: 20, })); // Refresh library after deletion
            } else if (action.meta.requestStatus === 'rejected') {
                toast.error("Error occurred while deleting the book.");
            }
        });
    };

    const handleEdit = (library) => {
        setEditMode(true);
        setSelectedLibraryId(library.id);
        setFormData({
            name: library.name,
            type: library.type,
            file: library.file,
            image: null,
        });
        handleShowModal();
    };

    const handlePageClick = (pageNumber) => {
        navigate(`?page=${pageNumber}`);
    };


    return (
        <Home>
            <div className="addTeacher">
                <button className="add-teacher-btn" onClick={handleShowModal}>+ Fayl Yuklash</button>
                <ModalLibrary
                    show={showModal}
                    handleChange={handleChange}
                    formData={formData}
                    handleClose={handleCloseModal}
                    handleSubmit={handleSubmit}
                    editMode={editMode}
                />
            </div>
            <div className="library">
                <div className="book-list">
                    {libraryItems && libraryItems.map((file, index) => (
                        <div className="book-card" key={index}>
                            <div>
                                <img src={Book} alt="PDF Icon" />
                                <div>
                                    <AiOutlineEdit
                                        style={{ position: "absolute", top: "12px", left: "12px" }}
                                        fontSize="24px"
                                        cursor="pointer"
                                        onClick={() => handleEdit(file)}
                                    />
                                    <AiOutlineDelete
                                        style={{ position: "absolute", top: "12px", right: "12px" }}
                                        fontSize="24px"
                                        cursor="pointer"
                                        onClick={() => handleDelete(file.id)}
                                    />
                                </div>
                            </div>

                            <p>{(page - 1) * limit + index + 1}) {file.name}</p>
                            <a href={file.file} target="_blank" rel="noopener noreferrer" download={file.title}>Yuklab olish</a>
                        </div>
                    ))}
                </div>
                <div className="pagination-container">
                    <PaginationComponent
                        count={Math.ceil(totalCount / limit)} // Calculate total pages
                        currentPage={page} // Current page from query params
                        onPageChange={handlePageClick} />
                </div>
            </div>
            <ToastContainer />
        </Home>
    );
};

export default AddLibrary;
