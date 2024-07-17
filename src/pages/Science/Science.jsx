import React, { useEffect, useState } from 'react';
import "./science.scss";
import { Link } from "react-router-dom";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getScience } from "../../redux/getScienceSlice/getScienceSlice";
import { getTeachers } from "../../redux/getTeacherSlice/getTeacherSlice";
import { setPage } from "../../redux/getStudentSlice";

const Science = () => {
    const dispatch = useDispatch();
    const { sciences, limit, offset, page } = useSelector((state) => state.AllScienceSlice);
    const { teacher: teacherData } = useSelector((state) => state.teacherReducer);
    const [selectedOption, setSelectedOption] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        study_period: "",
        training: "",
        lesson_day: "",
        group: '',
        teacher: ''
    });

    useEffect(() => {
        dispatch(getTeachers());
        dispatch(getScience({ limit, offset }));
    }, [limit, offset, dispatch]);

    // Extract unique study periods from teacherData
    const uniqueStudyPeriods = [...new Set(teacherData.map(item => item.group.study_period))];

    // Map options for the Select component based on unique study periods
    const studyPeriodOptions = uniqueStudyPeriods.map((period, index) => ({
        value: period,
        label: period,
    }));

    const handlePageChange = (newPage) => {
        dispatch(setPage(newPage));
    };

    const getTeacherName = (teacherId) => {
        const teacher = teacherData.find((teacher) => teacher.id === teacherId);
        return teacher ? teacher.fullname : 'Unknown';
    };

    return (
        <div className="backgroundPage">
            <div style={{ padding: " 20px 60px" }}>
                <div className="science">
                    <div className="science_class">
                        <Link style={{ textDecoration: "none", color: "#8D8484" }} to="/about">
                            <div className="science_class_weeks">Bosh saxifaga qaytish</div>
                        </Link>
                        <Select
                            value={selectedOption}
                            onChange={setSelectedOption}
                            options={studyPeriodOptions}
                            placeholder="Choose study period"
                        />
                    </div>

                    <table border="1" className="science_liness">
                        <thead>
                        <tr>
                            <th className="science_liness_th">O'QITUVCHILAR</th>
                            <th className="science_liness_th">FANLAR</th>
                        </tr>
                        </thead>
                        <tbody>
                        {sciences.map((item) => (
                            <tr key={item.id}>
                                <td className="science_liness_items">
                                    <Link to="/homework"
                                          style={{ textDecoration: "none", color: "black" }}>
                                        {getTeacherName(item.teacher)}
                                    </Link>
                                </td>
                                <td className="science_liness_items">
                                    <Link to="/homework"
                                          style={{ textDecoration: "none", color: "black" }}>
                                        {item.name}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="pagination-container">
                        <button
                            className="pagination-button"
                            disabled={page === 1}
                            onClick={() => handlePageChange(page - 1)}
                        >
                            Previous
                        </button>
                        <span className="pagination-page">Page {page}</span>
                        <button
                            className="pagination-button"
                            onClick={() => handlePageChange(page + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Science;
