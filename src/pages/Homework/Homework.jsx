import React, { useEffect } from 'react';
import './homework.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTask } from '../../redux/HomeworkSlice';
import { getAllScience } from '../../redux/ScienceSlice';
// Import the PDF icon
import { FaFilePdf } from 'react-icons/fa'; // Using FontAwesome for the PDF icon

const Homework = () => {
    const dispatch = useDispatch();
    const { homework, limit, offset } = useSelector((state) => state.HomeworkSlice);
    const { scienceList } = useSelector((state) => state.ScienceSlice); // Assuming getAllScience returns a list of sciences

    useEffect(() => {
        dispatch(getAllScience());
        dispatch(getTask({ limit, offset }));
    }, [limit, offset, dispatch]);

    // Function to get science name by courseId
    const getScienceName = (courseId) => {
        const scienceItem = scienceList.find(science => science.id === courseId);
        return scienceItem ? scienceItem.name : 'Unknown';
    };
console.log(homework)
    return (
        <div className="backgroundPage">
            <div style={{ padding: '20px 60px' }}>
                <div className="blur">
                    <div className="result">
                        <div className="result_head">
                            <Link style={{ textDecoration: 'none', color: '#8D8484' }} to="/about">
                                <div className="result_head_homes">Bosh sahifaga qaytish</div>
                            </Link>
                            <Link style={{ textDecoration: 'none', color: '#8D8484' }} to="/science">
                                <div className="result_head_homes">Ortga qaytish</div>
                            </Link>
                        </div>
                        <table border="1" className="tabless">
                            <thead>
                            <tr>
                                <th className="tabless_th">FANLAR</th>
                                <th className="tabless_th">VAZIFA</th>
                                <th className="tabless_th">TOPSHIRIQ MUDDATI</th>
                                <th className="tabless_th">FILE</th>
                                <th className="tabless_th">IZOH</th>
                            </tr>
                            </thead>
                            <tbody>
                            {homework.map((item) => (
                                <tr key={item.id}>
                                    <td className="tabless_items">
                                        {getScienceName(item.course)}
                                    </td>
                                    <td className="tabless_items">
                                        {item.homework}
                                    </td>
                                    <td className="tabless_items">
                                        {item.finished_date}
                                    </td>
                                    <td className="tabless_items">
                                        {item.file ? (
                                            <a href={item.file} target="_blank" rel="noopener noreferrer">
                                                <FaFilePdf />
                                            </a>
                                        ) : 'No file'}
                                    </td>
                                    <td className="tabless_items">
                                        {item.description}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            Result
        </div>
    );
};

export default Homework;
