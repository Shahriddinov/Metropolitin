import React from 'react';
import science from "../../../../Science/Science";

const TableScience = ({data, teacherData, groupsData}) => {
    const getTeacherName = (teacherId) => {
        const teacher = teacherData.find((teacher) => teacher.id === teacherId);
        return teacher ? teacher.fullname : 'Unknown';
    };
    const getGroupName = (groupID) =>{
        const group = groupsData.find((group) => group.id === groupID);
        return group ? group.name : 'Unknown';
    }
    return (
        <div className="table_container">
            <table className="table_container-Ttabel">
                <thead>
                <tr>
                    <th className="table_container_Ttabel_Tth">Fan Nomi</th>
                    <th className="table_container_Ttabel_Tth">O'quv yili</th>
                    <th className="table_container_Ttabel_Tth">Guruh</th>
                    <th className="table_container_Ttabel_Tth">Dars Sanasi</th>
                    <th className="table_container_Ttabel_Tth">Mashg'ulot</th>
                    <th className="table_container_Ttabel_Tth">Xodim</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="table_container_Ttabel_Ttd">{item.name}</td>
                        <td className="table_container_Ttabel_Ttd">{item.study_period}</td>
                        <td className="table_container_Ttabel_Ttd">{getGroupName(item.group)}</td>
                        <td className="table_container_Ttabel_Ttd">{item.lesson_day}</td>
                        <td className="table_container_Ttabel_Ttd">{item.training}</td>
                        <td className="table_container_Ttabel_Ttd">{getTeacherName(item.teacher)}</td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableScience;