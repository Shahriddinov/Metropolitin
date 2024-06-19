import React, {useState} from 'react';
import Home from "../Home/Home";
import Book from "../../../../assets/images/books.png";
import File from "../../../../assets/images/file.png";
import "./addLibrary.scss"
const AddLibrary = () => {
    const [pdfFiles, setPdfFiles] = useState([]);
    const [fileTitle, setFileTitle] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPdfFiles([...pdfFiles, { title: fileTitle, file: reader.result }]);
                setFileTitle('');
            };
            reader.readAsDataURL(file);
        }
    };

    const handleTitleChange = (event) => {
        setFileTitle(event.target.value);
    };

    return (
        <Home>
            <div className="library">
                <div className="library-header">
                    <h2>Kutubxona</h2>
                </div>
                <div className="upload-section">
                    <div className="upload-card">
                        <img src={File} alt="Upload PDF Icon" />
                        <input
                            type="text"
                            placeholder="Fayl nomini kiriting"
                            value={fileTitle}
                            onChange={handleTitleChange}
                        />
                        <input type="file" accept="application/pdf" onChange={handleFileUpload} />
                        <button className="save-button">Saqlash</button>
                    </div>
                </div>
                <div className="book-list">
                    {pdfFiles.map((file, index) => (
                        <div className="book-card" key={index}>
                            <img src={Book} alt="PDF Icon" />
                            <p>{file.title}</p>
                            <a href={file.file} download={file.title}>Yuklab olish</a>
                        </div>
                    ))}
                </div>
            </div>
        </Home>
    );
};

export default AddLibrary;