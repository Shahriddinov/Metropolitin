import React from 'react';
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";

function TableGroup({data, handleDelete, handleEdit}) {
    return (
        <div className="table_container">
            <table className="table_container-Ttabel">
                <thead>
                <tr>
                    <th className="table_container_Ttabel_Tth">Guruh</th>
                    <th className="table_container_Ttabel_Tth">O'quv yili</th>
                    <th className="table_container_Ttabel_Tth">Malaka oshirish uchun soat</th>
                    <th className="table_container_Ttabel_Tth">O'zgartirish</th>
                    <th className="table_container_Ttabel_Tth">O'chirish</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="table_container_Ttabel_Ttd">{item.name}</td>
                        <td className="table_container_Ttabel_Ttd">{item.study_period}</td>
                        <td className="table_container_Ttabel_Ttd">{item.training_hour}</td>
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
}

export default TableGroup;