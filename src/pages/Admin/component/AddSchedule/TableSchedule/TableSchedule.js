import React from 'react';

const TableSchedule = ({data}) => {

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
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.day}</td>
                            <td>{item.start_time} && {item.end_time} </td>
                            <td>{item?.course?.name}</td>
                            <td>{item.teacher.fullname}</td>
                            <td>{item.group.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableSchedule;