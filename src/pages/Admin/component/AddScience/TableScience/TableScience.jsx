import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"; // Import the edit icon

const TableScience = ({ data, teacherData, groupsData, handleDelete, handleEdit }) => { // Add handleEdit as a prop
    const getTeacherName = (teacherId) => {
        const teacher = teacherData.find((teacher) => teacher.id === teacherId);
        return teacher ? teacher.fullname : 'Unknown';
    };

    const getGroupName = (groupID) => {
        const group = groupsData.find((group) => group.id === groupID);
        return group ? group.name : 'Unknown';
    };

    return (
        <div className="table_container">
            <table className="table_container-Ttabel">
                <thead>
                <tr>
                    <th className="table_container_Ttabel_Tth">N</th>
                    <th className="table_container_Ttabel_Tth">Fan Nomi</th>
                    <th className="table_container_Ttabel_Tth">O'quv yili</th>
                    <th className="table_container_Ttabel_Tth">Guruh</th>
                    <th className="table_container_Ttabel_Tth">Dars Sanasi</th>
                    <th className="table_container_Ttabel_Tth">Mashg'ulot</th>
                    <th className="table_container_Ttabel_Tth">Xodim</th>
                    <th className="table_container_Ttabel_Tth">O'zgartirish</th>
                    <th className="table_container_Ttabel_Tth">O'chirish</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="table_container_Ttabel_Ttd">{index + 1}</td>
                        <td className="table_container_Ttabel_Ttd">{item.name}</td>
                        <td className="table_container_Ttabel_Ttd">{item.study_period}</td>
                        <td className="table_container_Ttabel_Ttd">{getGroupName(item.group)}</td>
                        <td className="table_container_Ttabel_Ttd">{item.lesson_day}</td>
                        <td className="table_container_Ttabel_Ttd">{item.training}</td>
                        <td className="table_container_Ttabel_Ttd">{getTeacherName(item.teacher)}</td>
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

export default TableScience;
