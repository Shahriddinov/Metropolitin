// src/components/Table.js
import React from 'react';
import './tableTeacher.scss';

const TableTeacher = ({ data }) => {
    return (
        <div className="table_container">
            <table className="table_container-Ttabel">
                <thead>
                <tr>
                    <th className="table_container_Ttabel_Tth">F I O</th>
                    <th className="table_container_Ttabel_Tth">Mutaxassislik</th>
                    <th className="table_container_Ttabel_Tth">ID/Passport</th>
                    <th className="table_container_Ttabel_Tth">Ta'lim turi</th>
                    <th className="table_container_Ttabel_Tth">Ish joyi</th>
                    <th className="table_container_Ttabel_Tth">JSHSHIR</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="table_container_Ttabel_Ttd">{item.fio}</td>
                        <td className="table_container_Ttabel_Ttd">{item.mutaxassislik}</td>
                        <td className="table_container_Ttabel_Ttd">{item.idPassport}</td>
                        <td className="table_container_Ttabel_Ttd">{item.talimTuri}</td>
                        <td className="table_container_Ttabel_Ttd">{item.ishJoyi}</td>
                        <td className="table_container_Ttabel_Ttd">{item.jshshir}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableTeacher;
