import React from 'react';
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";

const TableSchedule = ({data, handleDelete, handleEdit, page, limit}) => {
    if (!Array.isArray(data)) {
        return null;
    }
    return (
        <div className="table_container">
            <div className="schedule-table">
                <table>
                    <thead>
                    <tr>
                        <th>N</th>
                        <th>Dars sanasi</th>
                        <th>Juftlik</th>
                        <th>Fanlar</th>
                        <th>Xodim</th>
                        <th>Guruh</th>
                        <th className="table_container_Ttabel_Tth">O'ch /O'z</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{page * limit - limit + index + 1}</td>
                            <td>{item.day}</td>
                            <td>{item.start_time} && {item.end_time} </td>
                            <td>{item?.course?.name}</td>
                            <td>{item.teacher?.fullname}</td>
                            <td>{item.group?.name}</td>
                            <td className="table_container_Ttabel_Ttd">
                                <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>

                                <AiOutlineEdit
                                    fontSize="24px"
                                    cursor="pointer"
                                    onClick={() => handleEdit(item)} // Handle edit click
                                /> /
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
        </div>
    );
};

export default TableSchedule;