// src/components/Table.js
import React from 'react';
import './tableTeacher.scss';
import {IoMdSearch} from "react-icons/io";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";

const TableTeacher = ({ data, groupsData,  page, limit, handleDelete, handleEdit }) => {
    if (!Array.isArray(data)) {
        return <p>No data available</p>;
    }
    return (
        <div className="table_container">
            <table className="table_container-Ttabel">
                <thead>
                <tr>
                    <th className="table_container_Ttabel_Tth">N%</th>
                    <th className="table_container_Ttabel_Tth">F I O</th>
                    <th className="table_container_Ttabel_Tth">Mutaxassislik</th>
                    <th className="table_container_Ttabel_Tth">ID/Passport</th>
                    <th className="table_container_Ttabel_Tth">Tug'ilgan yili</th>
                    <th className="table_container_Ttabel_Tth">JSHSHIR</th>
                    <th className="table_container_Ttabel_Tth">Ish joyi</th>
                    <th className="table_container_Ttabel_Tth">O'zgartirish</th>
                    <th className="table_container_Ttabel_Tth">O'chirish</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (

                    <tr key={index}>
                        <td className="table_container_Ttabel_Ttd">{page * limit - limit + index + 1}</td>
                        <td className="table_container_Ttabel_Ttd">{item.fullname}</td>
                        <td className="table_container_Ttabel_Ttd">{item.expertise}</td>
                        <td className="table_container_Ttabel_Ttd">{item.user.passport}</td>
                        <td className="table_container_Ttabel_Ttd">{item.birthday}</td>
                        <td className="table_container_Ttabel_Ttd">{item?.user.jshshr}</td>
                        <td className="table_container_Ttabel_Ttd">{item.work_place}</td>
                        <td className="table_container_Ttabel_Ttd">
                            <AiOutlineEdit
                                fontSize="24px"
                                cursor="pointer"
                                onClick={() => handleEdit(item)} // Handle edit click
                            />
                        </td>
                        <td className="table_container_Ttabel_Ttd">
                            <AiOutlineDelete
                                fontSize="24px"
                                cursor="pointer"
                                onClick={() => handleDelete(item.id)}
                            />
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableTeacher;
