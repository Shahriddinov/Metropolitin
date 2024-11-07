import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import ModalDocuments from './ModalDocuments/ModalDocuments';
import TableDocuments from './TableDocuments/TableDocuments';
import { addDocuments, deleteDocument, updateDocument, getDocument, setPage } from '../../../../redux/DocumentsSlice'; // Import setPage from DocumentsSlice
import { Spinner } from '../../../../components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation, useNavigate} from "react-router-dom";
import PaginationComponent from "../../../../components/Pagination/Pagination";

const AddDocuments = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const { documents = [], status, error, setPage, totalCount } = useSelector((state) => state.GetDocument || {});
    const [editMode, setEditMode] = useState(false);
    const [selectedDocumentId, setSelectedDocumentId] = useState(null);
    const limit = 20;
    const currentPage = 1;
    const getQueryParams = () => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get('page')) || 1; // Default to page 1 if not specified
        const search = params.get('search') || '';
        return { page, search };
    };

    const { page, search } = getQueryParams();
    const offset = (page - 1) * limit; // Calculate offset for pagination

    const [formData, setFormData] = useState({
        command_number: '',
        order_date: '',
        description: '',
        file: null,
    });

    useEffect(() => {
        dispatch(getDocument({ limit, offset }));
    }, [limit, offset, dispatch]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    if (status === 'loading') {
        return <Spinner />;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const handleEdit = (document) => {
        setEditMode(true);
        setSelectedDocumentId(document.id);
        setFormData({
            command_number: document.command_number,
            order_date: document.order_date,
            description: document.description,
            file: document.file,
        });
        handleShowModal();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('command_number', formData.command_number);
        data.append('order_date', formData.order_date);
        data.append('description', formData.description);
        if (formData.file) {
            data.append('file', formData.file);
        }

        try {
            if (editMode) {
                await dispatch(updateDocument({ id: selectedDocumentId, payload: data })).unwrap();
                toast.success('Document successfully updated!');
            } else {
                await dispatch(addDocuments(data)).unwrap();
                toast.success('Document successfully added!');
            }
        } catch (error) {
            toast.error('Error occurred while processing the document.');
        } finally {
            dispatch(getDocument({ page: currentPage, limit: 20 }));
            setFormData({
                command_number: '',
                order_date: '',
                description: '',
                file: null,
            });
            handleCloseModal();
        }
    };

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleDelete = (documentId) => {
        dispatch(deleteDocument(documentId)).then((action) => {
            if (action.meta.requestStatus === 'fulfilled') {
                toast.success('Document successfully deleted!');
            } else if (action.meta.requestStatus === 'rejected') {
                toast.error('Error occurred while deleting the document.');
            }
            dispatch(getDocument({ page: currentPage, limit: 20}));
        });
    };

    const handlePageClick = (pageNumber) => {
        navigate(`?page=${pageNumber}`);
    };

    return (
        <Home>
            <div className="addTeacher">
                <button className="add-teacher-btn" onClick={handleShowModal}>
                    + Fayl Yuklash
                </button>
                <ModalDocuments
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formData={formData}
                />
                <TableDocuments handleDelete={handleDelete} data={documents || []} handleEdit={handleEdit} />

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

export default AddDocuments;
