import React, { useEffect } from 'react';
import "./teacherHomework.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../../../redux/HomeworkSlice";

const TeacherHomework = () => {
    const dispatch = useDispatch();
    const { homework, limit, offset } = useSelector((state) => state.HomeworkSlice);

    const location = useLocation();
    const { scienceId, scienceName, group, training } = location.state || {};

    useEffect(() => {
        dispatch(getTask({ limit, offset }));
    }, [limit, offset, dispatch]);

    // Filter homework based on the selected science ID
    const filteredHomework = homework.filter(hw => hw.course === scienceId);

    return (
        <div className="backgroundPage">
            <div style={{ padding: "20px 60px" }}>
                <div className="blur">
                    <div className="result">
                        <div className="result_head">
                            <Link style={{ textDecoration: "none", color: "#8D8484" }} to="/teacher/about">
                                <div className="result_head_homes">Bosh saxifaga qaytish</div>
                            </Link>
                            <Link style={{ textDecoration: "none", color: "#8D8484" }} to="/teacher/science">
                                <div className="result_head_homes">Ortga qaytish</div>
                            </Link>
                        </div>

                        <table border="1" className="tabless">
                            <thead>
                            <tr>
                                <th className="tabless_th">Fan</th>
                                <th className="tabless_th">Guruh</th>
                                <th className="tabless_th">Mashg'ulotlar</th>
                                <th className="tabless_th">Topshiriqlar</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredHomework.map(hw => (
                                <tr key={hw.id}>
                                    <td className="tabless_items">{scienceName}</td>
                                    <td className="tabless_items">{group}</td>
                                    <td className="tabless_items">{training}</td>
                                    <td className="tabless_items">
                                        <a href={hw.file}>Download</a>
                                    </td>
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

export default TeacherHomework;
