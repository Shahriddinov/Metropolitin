import React, { useEffect, useState } from 'react';
import "./science.scss";
import { Link } from "react-router-dom";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {getAllScience, getScience} from "../../redux/ScienceSlice";
import { getTeachers } from "../../redux/TeacherSlice";
import { setPage } from "../../redux/LibrarySlice/librarySlice";

const Science = () => {
    const dispatch = useDispatch();
    const { scienceList, limit, offset, page } = useSelector((state) => state.ScienceSlice);
    const { teachers: teacherData } = useSelector((state) => state.TeacherSlice);
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
        dispatch(getAllScience({ limit, offset }));
    }, [limit, offset, dispatch]);

    // Extract unique study periods from teacherData
    const uniqueStudyPeriods = [
        ...new Set(
            teacherData
                .filter(item => item.group && item.group.study_period) // Ensure group and study_period exist
                .map(item => item.group.study_period)
        )
    ];

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
                            <div className="science_class_weeks">Bosh sahifaga qaytish</div>
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
                        {scienceList.map((item) => (
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

                </div>
            </div>
        </div>
    );
};

export default Science;
