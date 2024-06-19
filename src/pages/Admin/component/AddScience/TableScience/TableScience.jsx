import React from 'react';

const TableScience = ({ data }) => {
    return (
        <div className="table_container">
            <table className="table_container-Ttabel">
                <thead>
                <tr>
                    <th className="table_container_Ttabel_Tth">Fan Nomi</th>
                    <th className="table_container_Ttabel_Tth">O'quv yili</th>
                    <th className="table_container_Ttabel_Tth">Guruh</th>
                    <th className="table_container_Ttabel_Tth">Mashg'ulot</th>
                    <th className="table_container_Ttabel_Tth">Dars Sanasi</th>
                    <th className="table_container_Ttabel_Tth">Xodim</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="table_container_Ttabel_Ttd">{item.science}</td>
                        <td className="table_container_Ttabel_Ttd">{item.lessonTime}</td>
                        <td className="table_container_Ttabel_Ttd">{item.studyYear}</td>
                        <td className="table_container_Ttabel_Ttd">{item.employee}</td>
                        <td className="table_container_Ttabel_Ttd">{item.training}</td>
                        <td className="table_container_Ttabel_Ttd">{item.group}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableScience;