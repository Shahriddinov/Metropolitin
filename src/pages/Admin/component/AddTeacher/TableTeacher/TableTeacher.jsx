// src/components/Table.js
import React from 'react';
import './tableTeacher.scss';

const TableTeacher = ({ data, groupsData,  page, limit }) => {
    const getGroupName = (groupID) =>{
        const group = groupsData.find((group) => group.id === groupID);
        return group ? group.name : 'Unknown';
    }
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
                    <th className="table_container_Ttabel_Tth">Guruh</th>
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
                        <td className="table_container_Ttabel_Ttd">{item.group.name}</td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableTeacher;
