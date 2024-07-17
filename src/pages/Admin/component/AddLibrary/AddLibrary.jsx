import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Home from '../Home/Home';

import './addLibrary.scss';
import {addLibrary} from '../../../../redux/AddLibrarySlice/librarySlice';
import {Spinner} from '../../../../components';
import {addDocuments} from "../../../../redux/AddDocumentsSlice/DocumentsSlice";
import {getDocument} from "../../../../redux/GetDocumentSlice/getDocumentSlice";
import ModalDocuments from "../AddDocuments/ModalDocuments/ModalDocuments";
import ModalLibrary from "./ModalLibrary/ModalLibrary";
import {getLibrary} from "../../../../redux/getLibrarySlice/getLibrarySlice";
import {setPage} from "../../../../redux/getStudentSlice";
import Book from "../../../../assets/images/books.png"
const isPdf = (fileName) => {
    return fileName.endsWith('.pdf');
};
const AddLibrary = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const {librarys, limit, offset, page, status, error} = useSelector((state) => state.GetLibrary);
    useEffect(() => {
        dispatch(getLibrary({ limit, offset }));
    }, [limit, offset, dispatch]);

    if (status === 'loading') {
        return <Spinner />;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    const handleSubmit = async (formData) => {
        try {
            await dispatch(addLibrary(formData)).then(() => {
                dispatch(getLibrary({ limit, offset }));
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
                <ModalLibrary
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleSubmit={handleSubmit}
                />
            </div>
            <div className="library">


                <div className="book-list">
                    {librarys.map((file, index) => (
                        <div className="book-card" key={index}>
                            <img src={Book} alt="PDF Icon"/>
                            <p>{file.name}</p>
                            <a href={file.file} target="_blank" download={file.title}>Yuklab olish</a>
                        </div>
                    ))}

                </div>
            </div>
        </Home>
    );
};

export default AddLibrary;
