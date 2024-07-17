import React from 'react';
import pdf from "../../../../../assets/images/pdf.webp";

const isPdf = (fileName) => {
    return fileName.endsWith('.pdf');
};
const TableDocuments = ({data}) => {
    return (
        <div className="table_container">
            <table className="table_container-Ttabel">
                <thead>
                <tr>
                    <th className="table_container_Ttabel_Tth">Buyruq raqami</th>
                    <th className="table_container_Ttabel_Tth">Buyruq sanasi</th>
                    <th className="table_container_Ttabel_Tth">Fayl yuklash</th>
                    <th className="table_container_Ttabel_Tth">Qisqacha mazmuni</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
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
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableDocuments;