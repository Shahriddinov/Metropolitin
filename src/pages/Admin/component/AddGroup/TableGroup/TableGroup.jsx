import React from 'react';

function TableGroup({data}) {
    return (
        <div className="table_container">
            <table className="table_container-Ttabel">
                <thead>
                <tr>
                    <th className="table_container_Ttabel_Tth">Guruh</th>
                    <th className="table_container_Ttabel_Tth">O'quv yili</th>
                    <th className="table_container_Ttabel_Tth">Malaka oshirish uchun soat</th>

                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="table_container_Ttabel_Ttd">{item.name}</td>
                        <td className="table_container_Ttabel_Ttd">{item.study_period}</td>
                        <td className="table_container_Ttabel_Ttd">{item.training_hour}</td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableGroup;