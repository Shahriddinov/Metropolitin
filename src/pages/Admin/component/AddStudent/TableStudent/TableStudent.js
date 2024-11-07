import React, {useState} from 'react';
import {Spinner} from "../../../../../components";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import {BsThreeDotsVertical} from "react-icons/bs";

const TableStudent = ({data, handleStudentDelete, handleEdit, page, limit}) => {

    if (!Array.isArray(data)) {
        return <Spinner/>;
    }
    return (
        <div className="table_container">
            <table className="table_container-Ttabel">
                <thead>
                <tr>
                    <th className="table_container_Ttabel_Tth">N</th>
                    <th className="table_container_Ttabel_Tth">F I O</th>
                    <th className="table_container_Ttabel_Tth">Mutaxassislik</th>
                    <th className="table_container_Ttabel_Tth">Tug'ilgan yili</th>
                    <th className="table_container_Ttabel_Tth">Yashash joyi</th>
                    <th className="table_container_Ttabel_Tth">JSHSHIR</th>
                    <th className="table_container_Ttabel_Tth">ID/Passport</th>
                    <th className="table_container_Ttabel_Tth">Ish joyi</th>
                    <th className="table_container_Ttabel_Tth">Guruh</th>
                    <th className="table_container_Ttabel_Tth">Ta'lim turi</th>
                    <th className="table_container_Ttabel_Tth">O'quv yili</th>
                    <th className="table_container_Ttabel_Tth">O'ch/ O'z</th>

                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (

                    <tr key={index}>
                        <td className="table_container_Ttabel_Ttd">{page * limit - limit + index + 1}</td>
                        <td className="table_container_Ttabel_Ttd">{item?.fullname}</td>
                        <td className="table_container_Ttabel_Ttd">{item?.expertise}</td>
                        <td className="table_container_Ttabel_Ttd">{item?.birthday}</td>
                        <td className="table_container_Ttabel_Ttd">{item?.adress}</td>
                        <td className="table_container_Ttabel_Ttd">{item?.user.jshshr}</td>
                        <td className="table_container_Ttabel_Ttd">{item.user ? item.user.passport : 'N/A'}</td>
                        <td className="table_container_Ttabel_Ttd">{item?.work_place}</td>
                        <td className="table_container_Ttabel_Ttd">{item?.group?.name}</td>
                        <td className="table_container_Ttabel_Ttd">{item?.study_type}</td>
                        <td className="table_container_Ttabel_Ttd">{item?.study_period}</td>

                        <td className="table_container_Ttabel_Ttd">
                            <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
                                <AiOutlineEdit
                                    fontSize="24px"
                                    cursor="pointer"
                                    onClick={() => handleEdit(item)}
                                />
                                <AiOutlineDelete
                                    fontSize="24px"
                                    cursor="pointer"
                                    onClick={() => handleStudentDelete(item.id)}
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

export default TableStudent;
