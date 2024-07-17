import React, {useEffect, useState} from 'react';
import Home from "../Home/Home";
import {useDispatch, useSelector} from 'react-redux';

import ModalDocuments from "./ModalDocuments/ModalDocuments";
import TableDocuments from "./TableDocuments/TableDocuments";
import {addDocuments} from "../../../../redux/AddDocumentsSlice/DocumentsSlice";
import {getDocument} from "../../../../redux/GetDocumentSlice/getDocumentSlice";
import {Spinner} from "../../../../components";
import {setPage} from "../../../../redux/getStudentSlice";

const AddDocuments = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const {documents, limit, offset, page, status, error} = useSelector((state) => state.GetDocument);

    useEffect(() => {
        dispatch(getDocument({ limit, offset }));
    }, [limit, offset, dispatch]);

    if (status === 'loading') {
        return <Spinner />;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSubmit = async (formData) => {
        try {
            await dispatch(addDocuments(formData)).then(() => {
                dispatch(getDocument({ limit, offset }));
            });
            handleCloseModal();
        } catch (error) {
            console.error('Error adding document:', error);
        }
    };

    const handlePageChange = (newPage) => {
        dispatch(setPage(newPage));
    };

    return (
        <Home>
            <div className="addTeacher">
                <button className="add-teacher-btn" onClick={handleShowModal}>+ Fayl Yuklash</button>
                <ModalDocuments
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleSubmit={handleSubmit}
                />
                <TableDocuments data={documents || []} />

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

export default AddDocuments;
