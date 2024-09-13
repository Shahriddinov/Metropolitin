import React, {useEffect, useState} from 'react';
import './classSchedule.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getScheduleAll } from '../../redux/ScheduleSlice';

const formatTime = (timeString) => {
    if (!timeString) return '';
    return timeString.slice(0, 5); // Vaqtni 'HH:mm' formatiga keltirish
};

// Sana va hafta kunini olish
const getWeekDayAndDate = (dateString) => {
    const date = new Date(dateString);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = daysOfWeek[date.getDay()]; // Haftaning kun nomi
    const formattedDate = date.toLocaleDateString(); // 'DD/MM/YYYY' formatida
    return { dayName, formattedDate };
};

const ClassSchedule = () => {
    const dispatch = useDispatch();
    const { schedules } = useSelector((state) => state.ScheduleSlice);
    const [filteredSchedule, setFilteredSchedule] = useState([]);
    const loggedInGroupId = localStorage.getItem('groupID');

    useEffect(() => {
        dispatch(getScheduleAll());
    }, [dispatch]);

    useEffect(() => {
        if (loggedInGroupId && schedules.length > 0) {
            // Filter schedules for the logged-in group
            const filtered = schedules.filter(item => item.group?.id === parseInt(loggedInGroupId));

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

    const timeSlots = ["08:00", "08:30", "09:30", "10:00", "11:00", "11:30", "12:30", "13:00", "14:30", "16:00"];
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const daysWithDates = filteredSchedule.map((schedule) => {
        const { dayName, formattedDate } = getWeekDayAndDate(schedule.day);
        return { dayName, date: formattedDate };
    });

    const getDateForDay = (dayName) => {
        const dayData = daysWithDates.find((item) => item.dayName === dayName);
        return dayData ? dayData.date : null;
    };

    return (
        <div className="schedule">
            <div style={{ padding: '20px 60px' }}>
                <div className="schedule_tables">
                    <div className="schedule_tables_class">
                        <div>Dars jadvali</div>
                        <div className="schedule_tables_class_weeks">Haftalik</div>
                        <Link style={{ textDecoration: 'none', color: '#8D8484' }} to="/teacher/about">
                            <div className="schedule_tables_class_weeks">Bosh sahifaga qaytish</div>
                        </Link>
                    </div>
                    <div className="table_container">
                        <table className="table_container-Ttabel">
                            <thead>
                            <tr>
                                <th className="table_container_Ttabel_Tth">T</th>
                                {daysOfWeek.map((dayName, index) => (
                                    <th key={index} className="table_container_Ttabel_Tth">
                                        {dayName} <br />
                                        {getDateForDay(dayName) && <span>{getDateForDay(dayName)}</span>}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {timeSlots.map((time) => (
                                <tr key={time}>
                                    <td className="table_container_Ttabel_Ttd">{time}</td>
                                    {daysOfWeek.map((dayName) => {
                                        const classData = filteredSchedule.find(
                                            (item) =>
                                                getWeekDayAndDate(item.day).dayName === dayName &&
                                                formatTime(item.start_time) === time
                                        );
                                        return (
                                            <td
                                                className="table_container_Ttabel_Ttd"
                                                key={dayName}
                                                style={{
                                                    backgroundColor: classData ? '#8DFC71' : 'transparent',
                                                }}
                                            >
                                                {classData ? (
                                                    <div>
                                                        {classData.course?.name}
                                                    </div>
                                                ) : null}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassSchedule;
