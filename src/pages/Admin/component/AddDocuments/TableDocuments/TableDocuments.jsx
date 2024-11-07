import React from 'react';
import pdf from "../../../../../assets/images/pdf.webp";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";

const isPdf = (fileName) => {
    return fileName.endsWith('.pdf');
};
const TableDocuments = ({data, handleDelete, handleEdit}) => {
    return (
        <div className="table_container">
            <table className="table_container-Ttabel">
                <thead>
                <tr>
                    <th className="table_container_Ttabel_Tth">N</th>
                    <th className="table_container_Ttabel_Tth">Buyruq raqami</th>
                    <th className="table_container_Ttabel_Tth">Buyruq sanasi</th>
                    <th className="table_container_Ttabel_Tth">Fayl yuklash</th>
                    <th className="table_container_Ttabel_Tth">Qisqacha mazmuni</th>
                    <th className="table_container_Ttabel_Tth">O'ch/O'z</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="table_container_Ttabel_Ttd">{index+ 1}</td>
                        <td className="table_container_Ttabel_Ttd">{item.command_number}</td>
                        <td className="table_container_Ttabel_Ttd">{item.order_date}</td>
                        <td className="table_container_Ttabel_Ttd">
                            {isPdf(item.file) ? (
                                <a href={item.file} target="_blank" rel="noopener noreferrer">
                                    <img
                                        style={{ width: "24px", height: "24px" }}
                                        src={pdf}
                                        alt="PDF Icon"
                                    />
                                </a>
                            ) : (
                                <a href={item.file} target="_blank" rel="noopener noreferrer">
                                    <img
                                        style={{ width: "26px", height: "26px" }}
                                        src={pdf}
                                        alt="File"
                                    />
                                </a>
                            )}
                        </td>
                        <td className="table_container_Ttabel_Ttd">{item.description}</td>
                        <td className="table_container_Ttabel_Ttd">
                            <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
                            <AiOutlineEdit
                                fontSize="24px"
                                cursor="pointer"
                                onClick={() => handleEdit(item)} // Handle edit click
                            />
                                /
                                <AiOutlineDelete
                                    fontSize="24px"
                                    cursor="pointer"
                                    onClick={() => handleDelete(item.id)}
                                />
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableDocuments;