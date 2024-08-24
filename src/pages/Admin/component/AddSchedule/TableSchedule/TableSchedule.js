import React from 'react';
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";

const TableSchedule = ({data, handleDelete, handleEdit}) => {
    if (!Array.isArray(data)) {
        console.error("Expected data to be an array but got:", data);
        return null;
    }
    return (
        <div className="table_container">
            <div className="schedule-table">
                <table>
                    <thead>
                    <tr>
                        <th>Dars sanasi</th>
                        <th>Juftlik</th>
                        <th>Fanlar</th>
                        <th>Xodim</th>
                        <th>Guruh</th>
                        <th className="table_container_Ttabel_Tth">O'zgartirish</th>
                        <th className="table_container_Ttabel_Tth">O'chirish</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.day}</td>
                            <td>{item.start_time} && {item.end_time} </td>
                            <td>{item?.course?.name}</td>
                            <td>{item.teacher?.fullname}</td>
                            <td>{item.group?.name}</td>
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
        </div>
    );
};

export default TableSchedule;