import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./testteacher.scss";
import { BsThreeDotsVertical } from "react-icons/bs";

const TeacherTest = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle modal visibility
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="backgroundPage">
            <div style={{ padding: "20px 60px" }}>
                <div className="blur">
                    <div className="result">
                        <div className="result_head">
                            <div className="result_head_homes">Yakuniy Test</div>
                            <Link style={{ textDecoration: "none", color: "#8D8484" }} to="/teacher/science">
                                <div className="result_head_homes">Bosh saxifaga qaytish</div>
                            </Link>
                        </div>
                        <table border="1" className="tabless">
                            <thead>
                            <tr>
                                <th className="tabless_th">Test Nomi</th>
                                <th className="tabless_th">Guruh</th>
                                <th className="tabless_th">Boshlanish sanasi</th>
                                <th className="tabless_th">Tugash sanasi</th>
                                <th className="tabless_th"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="tabless_items">Yakuniy Test</td>
                                <td className="tabless_items">M-202-2024</td>
                                <td className="tabless_items">02.05.2024</td>
                                <td className="tabless_items">02.05.2024</td>
                                <td className="tabless_items">
                                    {/* Three dots icon with onClick to open modal */}
                                    <BsThreeDotsVertical onClick={toggleModal} />
                                    {/* Modal */}
                                    {isModalOpen && (
                                        <div className="custom-modal">
                                            <div className="modal-content">
                                                <Link to="/teacher/doneStudent" className="modal-content_dones">Topshirgan talabalar</Link>
                                                {/* Add your modal content here */}
                                                {/*<button onClick={toggleModal}>Close</button>*/}
                                            </div>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherTest;
