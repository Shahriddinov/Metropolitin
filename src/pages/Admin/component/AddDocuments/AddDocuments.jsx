import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import ModalDocuments from './ModalDocuments/ModalDocuments';
import TableDocuments from './TableDocuments/TableDocuments';
import { addDocuments, deleteDocument, updateDocument, getDocument, setPage } from '../../../../redux/DocumentsSlice'; // Import setPage from DocumentsSlice
import { Spinner } from '../../../../components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDocuments = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const { documents = [], limit, offset, page, status, error, setLimit, setPage } = useSelector((state) => state.GetDocument || {});
    const [editMode, setEditMode] = useState(false);
    const [selectedDocumentId, setSelectedDocumentId] = useState(null);
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
            dispatch(getDocument({ limit, offset }));
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
            dispatch(getDocument({ limit, offset }));
        });
    };

    const handlePageChange = (newPage) => {
        dispatch(setPage(newPage));
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
                    <button
                        className="pagination-button"
                        disabled={page === 1}
                        onClick={() => handlePageChange(page - 1)}
                    >
                        Previous
                    </button>
                    <span className="pagination-page">Page {page}</span>
                    <button className="pagination-button" onClick={() => handlePageChange(page + 1)}>
                        Next
                    </button>
                </div>
            </div>
            <ToastContainer />
        </Home>
    );
};

export default AddDocuments;
