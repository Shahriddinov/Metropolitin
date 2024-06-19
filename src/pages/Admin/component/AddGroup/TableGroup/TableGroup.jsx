import React from 'react';

function TableGroup({data}) {
    return (
        <div className="table_container">
            <table className="table_container-Ttabel">
                <thead>
                <tr>
                    <th className="table_container_Ttabel_Tth">Guruh</th>
                    <th className="table_container_Ttabel_Tth">Malaka oshirish uchun soat</th>
                    <th className="table_container_Ttabel_Tth">O'quv yili</th>

                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="table_container_Ttabel_Ttd">{item.group}</td>
                        <td className="table_container_Ttabel_Ttd">{item.exsperiense}</td>
                        <td className="table_container_Ttabel_Ttd">{item.yearId}</td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableGroup;