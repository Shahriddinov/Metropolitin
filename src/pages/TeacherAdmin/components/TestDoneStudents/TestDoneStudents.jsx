import React from 'react';
import "./testDoneStudent.scss";
import {Link} from "react-router-dom";
import {BsThreeDotsVertical} from "react-icons/bs";
const TestDoneStudents = () => {
    return (
        <div className="backgroundPage">
            <div style={{ padding: "20px 60px" }}>
                <div className="blur">
                    <div className="result">
                        <div className="result_head">
                            <div className="result_head_homes">Topshirgan talabalar</div>
                            <Link style={{ textDecoration: "none", color: "#8D8484" }} to="/teacher/about">
                                <div className="result_head_homes">Bosh saxifaga qaytish</div>
                            </Link>
                        </div>
                        <table border="1" className="tabless">
                            <thead>
                            <tr>
                                <th className="tabless_th">N</th>
                                <th className="tabless_th">Talaba</th>
                                <th className="tabless_th">Topshirgan vaqti</th>
                                <th className="tabless_th">Guruh</th>
                                <th className="tabless_th">Ball</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="tabless_items">1</td>

                                <td className="tabless_items">Abdurashidov Hikmatillo Valijon o’g’li</td>
                                <td className="tabless_items">02.05.2024</td>
                                <td className="tabless_items">M-202-2024</td>
                                <td className="tabless_items">37/40</td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDoneStudents;