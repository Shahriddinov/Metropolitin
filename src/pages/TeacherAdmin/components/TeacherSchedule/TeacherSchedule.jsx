import React, {useEffect, useState} from 'react';
import "./teacherSchedule.scss"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getScheduleAll} from "../../../../redux/getScheduleSlice";
const formatTime = (timeString) => {
    if (!timeString) return '';
    return timeString.slice(0, 5);
};

const TeacherSchedule = () => {

    const dispatch = useDispatch();
    const { schedules } = useSelector((state) => state.allSchedule);
    const [filteredSchedule, setFilteredSchedule] = useState([]);

    const loggedInGroupId = localStorage.getItem('groupID');

    useEffect(() => {
        dispatch(getScheduleAll());
    }, [dispatch]);
    const filteredId = schedules.filter(item => item.group.id === parseInt(loggedInGroupId));

    useEffect(() => {
        if (loggedInGroupId && schedules.length > 0) {
            // Filter schedules for the logged-in group
            const filtered = schedules.filter(item => item.group.id === parseInt(loggedInGroupId));

            // Group schedules by unique day and keep only one entry per day
            const groupedByDay = {};
            filtered.forEach(item => {
                if (!groupedByDay[item.day]) {
                    groupedByDay[item.day] = item;
                }
            });

            // Convert grouped object back to an array
            const finalFilteredSchedule = Object.values(groupedByDay);

            setFilteredSchedule(finalFilteredSchedule);
        }
    }, [loggedInGroupId, schedules]);


    return (
        <div className="schedule">
            <div style={{ padding: "20px 60px" }}>
                <div className="schedule_tables">
                    <div className="schedule_tables_class">
                        <div>Dars jadvali</div>
                        <div className="schedule_tables_class_weeks">Haftalik</div>
                        <Link style={{ textDecoration: "none", color: "#8D8484" }} to="/teacher/about">
                            <div className="schedule_tables_class_weeks">Bosh saxifaga qaytish</div>
                        </Link>
                    </div>
                    <table border="1" className="tabless">
                        <thead>
                        <tr>
                            <th className="tabless_th">Dars Vaqti</th>
                            <th className="tabless_th">Guruh</th>
                            {filteredSchedule.map((item, index) => (
                                <th key={index} className="tabless_th">{item.day}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {filteredId.map((item) => (
                            <tr key={item.id}>
                                <td className="tabless_items">{formatTime(item.start_time)} - {formatTime(item.end_time)}</td>
                                <td className="tabless_items">{item.group.name}</td>
                                <td className="tabless_items">{item.course.name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeacherSchedule;